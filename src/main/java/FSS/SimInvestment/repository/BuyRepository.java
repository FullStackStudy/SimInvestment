package FSS.SimInvestment.repository;

import FSS.SimInvestment.domain.Buy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class BuyRepository {

    private final EntityManager em;

    public void save(Buy buy)
    {
        em.persist(buy);
    }
}
