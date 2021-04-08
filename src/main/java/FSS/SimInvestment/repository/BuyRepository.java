package FSS.SimInvestment.repository;

import FSS.SimInvestment.domain.Buy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class BuyRepository {

    private final EntityManager em;

    public void save(Buy buy)
    {
        em.persist(buy);
    }

    public Optional<Buy> findOne(Long buyKey)
    {
        Buy buy = em.find(Buy.class, buyKey);
        return Optional.ofNullable(buy);
    }

    public List<Buy> findBuyHistory(Long memberKey, Long itemKey)
    {
        return em.createQuery("select b from Buy b join b.member m join b.item i where m.key = :memberKey and i.key = :itemKey", Buy.class)
                .setParameter("memberKey", memberKey)
                .setParameter("itemKey", itemKey)
                .getResultList();
    }
}
