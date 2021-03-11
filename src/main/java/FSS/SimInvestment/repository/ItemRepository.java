package FSS.SimInvestment.repository;

import FSS.SimInvestment.domain.Item;
import FSS.SimInvestment.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ItemRepository {

    private final EntityManager em;

    public void save(Item item)
    {
        em.persist(item);
    }

    public Optional<Item> findByKey(Long key)
    {
        Item item = em.find(Item.class, key);

        return Optional.ofNullable(item);
    }

    public List<Item> findItems()
    {
        return em.createQuery("select i from Item i", Item.class)
                .getResultList();
    }

}
