package FSS.SimInvestment.service;

import FSS.SimInvestment.domain.Member;
import FSS.SimInvestment.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

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
        Optional<Member> findMember = memberRepository.findById(member.getId());
        if(findMember.get().getPassword().equals(member.getPassword()))
        {
            return findMember.get();
        }
        else
        {
            return null;
        }
    }

    public void checkDuplicatedId(String id)
    {
        Optional<Member> findMember = memberRepository.findById(id);

        if(findMember.isPresent())
        {
            throw new IllegalStateException("이미 존재하는 아이디 입니다.");
        }
    }

}
