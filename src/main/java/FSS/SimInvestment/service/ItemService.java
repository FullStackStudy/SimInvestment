package FSS.SimInvestment.service;

import FSS.SimInvestment.domain.Item;
import FSS.SimInvestment.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ItemService {

    private final ItemRepository itemRepository;

    @Transactional
    public void resist(Item item)
    {
        itemRepository.save(item);
    }

    public Optional<Item> findOne(Long itemKey)
    {
        return itemRepository.findByKey(itemKey);
    }


}
