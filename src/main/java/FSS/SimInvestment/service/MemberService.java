package FSS.SimInvestment.service;

import FSS.SimInvestment.domain.Member;
import FSS.SimInvestment.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public void join(Member member)
    {
        checkDuplicatedId(member.getId());
        memberRepository.save(member);
    }

    public Member login(Member member)
    {
        List<Member> findMember = memberRepository.findById(member.getId());
        for (Member m : findMember)
        {
            if(member.getPassword().equals(m.getPassword()))
            {
                return m;
            }
        }
        return null;
    }

    public void checkDuplicatedId(String id)
    {
        List<Member> findIds = memberRepository.findById(id);

        if(!findIds.isEmpty())
        {
            throw new IllegalStateException("이미 존재하는 아이디 입니다.");
        }
    }

}
