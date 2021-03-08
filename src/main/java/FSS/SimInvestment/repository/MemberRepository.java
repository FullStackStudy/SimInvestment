package FSS.SimInvestment.repository;

import FSS.SimInvestment.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    public void save(Member member)
    {
        em.persist(member);
    }

    public Optional<Member> findById(String id)
    {
        Member member = em.find(Member.class, id);

        return Optional.ofNullable(member);
    }

    public List<Member> findAllMember()
    {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

}
