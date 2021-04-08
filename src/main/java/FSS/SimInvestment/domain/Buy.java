package FSS.SimInvestment.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Buy {

    protected Buy(){}

    @Id @GeneratedValue
    private Long key;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_key")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY) // LAZY 로 설정해두면 DB에서 Buy 객체를 불러왔을 때 Member 관련 쿼리를 날리지 않음. 나중에 member에 진짜 접근할 때 실제로 쿼리가 날아감 !!
    @JoinColumn(name = "member_key")
    private Member member;

    private int count;

    private int totalPurchase; // 구매하는데 사용한 금액, 투자 금액

    // 처음 구매할 시
    public static Buy createBuy(Member member, Item item, int addCount)
    {
        Buy buy = new Buy();
        buy.setMember(member);
        buy.setItem(item);
        buy.setCount(addCount);
        buy.setTotalPurchase(addCount * item.getPrice());

        return buy;
    }

    public void addCount(int count)
    {
        this.setCount(this.count + count);
        this.setTotalPurchase(this.totalPurchase + item.getPrice() * count);
    }

    public void subCount(int count)
    {
        int restCount = this.count - count;
        if(restCount < 0)
        {
            //exception;
        }
        else
        {
            this.count = restCount;
        }
    }

    public int getNowPrice()
    {
        return item.getPrice() * count;
    }
}
