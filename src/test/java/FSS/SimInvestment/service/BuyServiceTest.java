package FSS.SimInvestment.service;

import FSS.SimInvestment.domain.Item;
import FSS.SimInvestment.domain.Member;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class BuyServiceTest {

    @Autowired
    private BuyService buyService;
    @Autowired
    private MemberService memberService;
    @Autowired
    private ItemService itemService;


    @Test
    public void 정상구매()
    {
        // Given
        Member m = new Member();
        m.setId("fong");
        m.setPassword("1234");
        m.setName("Lee");
        m.setMoney(1000);
        Long memberKey = memberService.join(m);

        Item item = new Item();
        item.setName("삼성잔자");
        item.setPrice(100);
        itemService.resist(item);

        int purchaseCount = 4;

        // When
        Long buyKey = buyService.buy(m.getKey(), item.getKey(), purchaseCount);

        // Then
        assertEquals(memberService.findOne(memberKey).get().getMoney(), 1000 - item.getPrice() * purchaseCount);
    }

    @Test(expected = IllegalStateException.class)
    public void 보유금액_초과_구매()
    {
        // Given
        Member m = new Member();
        m.setId("fong");
        m.setPassword("1234");
        m.setName("Lee");
        m.setMoney(1000);
        Long memberKey = memberService.join(m);

        Item item = new Item();
        item.setName("삼성잔자");
        item.setPrice(100);
        itemService.resist(item);

        int purchaseCount = 11;

        // When
        Long buyKey = buyService.buy(m.getKey(), item.getKey(), purchaseCount);

        // Then
        // Exception 발생해야 함.
    }

    @Test
    public void 정상판매()
    {
        // Given
        Member m = new Member();
        m.setId("fong");
        m.setPassword("1234");
        m.setName("Lee");
        m.setMoney(1000);
        Long memberKey = memberService.join(m);

        Item item = new Item();
        item.setName("삼성잔자");
        item.setPrice(100);
        Long itemKey = itemService.resist(item);

        int purchaseCount = 10;
        Long buyKey = buyService.buy(m.getKey(), item.getKey(), purchaseCount);

        // When
        itemService.changePriceOne(itemKey, 200);
        int sellCount = 4;
        buyService.sell(buyKey, sellCount);

        // Then
        assertEquals(memberService.findOne(memberKey).get().getMoney(), itemService.findOne(itemKey).get().getPrice() * sellCount);
    }

    @Test(expected = IllegalStateException.class)
    public void 보유수량_이상_판매()
    {
        // Given
        Member m = new Member();
        m.setId("fong");
        m.setPassword("1234");
        m.setName("Lee");
        m.setMoney(1000);
        Long memberKey = memberService.join(m);

        Item item = new Item();
        item.setName("삼성잔자");
        item.setPrice(100);
        Long itemKey = itemService.resist(item);

        int purchaseCount = 10;
        Long buyKey = buyService.buy(m.getKey(), item.getKey(), purchaseCount);

        // When
        itemService.changePriceOne(itemKey, 200);
        int sellCount = 11;
        buyService.sell(buyKey, sellCount);

        // Then
        // IllegaStateExeption 발생해야 함!
    }
}