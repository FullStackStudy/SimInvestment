package FSS.SimInvestment.service;


import FSS.SimInvestment.domain.Buy;
import FSS.SimInvestment.domain.Item;
import FSS.SimInvestment.domain.Member;
import FSS.SimInvestment.repository.BuyRepository;
import FSS.SimInvestment.repository.ItemRepository;
import FSS.SimInvestment.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BuyService {

    private final BuyRepository br;
    private final MemberRepository mr;
    private final ItemRepository ir;

    @Transactional
    public Long buy(Long memberKey, Long itemKey, int count)
    {
        Optional<Member> member = mr.findByKey(memberKey);
        Optional<Item> item = ir.findByKey(itemKey);
        Buy buy;

        // 추후에 수정하자 **
        if(!member.isPresent() || !item.isPresent())
        {
            return null;
        }

        List<Buy> buyHistory = br.findBuyHistory(member.get().getKey(), item.get().getKey());
        if(buyHistory.isEmpty())
        {
            buy = Buy.createBuy(member.get(), item.get(), count);
            br.save(buy);
        }
        else
        {
            buy = buyHistory.get(0);
            buy.addCount(count);
        }
        return buy.getKey();
    }

    @Transactional
    public void sell(Long memberKey, Long itemKey, int count)
    {
        Optional<Member> member = mr.findByKey(memberKey);
        Optional<Item> item = ir.findByKey(itemKey);
        Buy buy;

        // 추후에 수정하자 **
        if(!member.isPresent() || !item.isPresent())
        {
            return;
        }

        List<Buy> buyHistory = br.findBuyHistory(member.get().getKey(), item.get().getKey());
        if(!buyHistory.isEmpty())
        {
            buy = buyHistory.get(0);
            buy.subCount(count);
        }
    }
}
