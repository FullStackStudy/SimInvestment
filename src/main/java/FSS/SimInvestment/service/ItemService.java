package FSS.SimInvestment.service;

import FSS.SimInvestment.domain.Item;
import FSS.SimInvestment.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ItemService {

    private final ItemRepository itemRepository;

    @Transactional
    public Long resist(Item item)
    {
        itemRepository.save(item);
        return item.getKey();
    }

    public Optional<Item> findOne(Long itemKey)
    {
        return itemRepository.findByKey(itemKey);
    }

    @Transactional
    public void changePriceOne(Long itemKey, int price)
    {
        Optional<Item> item = itemRepository.findByKey(itemKey);
        // 추후에 수정하자 **
        item.ifPresent(i -> i.changePrice(price));
    }

    public List<Item> findAll()
    {
        return itemRepository.findItems();
    }
}
