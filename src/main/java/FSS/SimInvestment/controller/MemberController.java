package FSS.SimInvestment.controller;

import FSS.SimInvestment.domain.Member;
import FSS.SimInvestment.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/sign-up")
    public Member join(@RequestBody SignUpForm signUpForm)
    {
        Member member = new Member();
        try {
            member.setName(signUpForm.getName());
            member.setId(signUpForm.getId());
            member.setPassword(signUpForm.getPw());
            member.setEmail(signUpForm.getEmail());
            member.setTel(signUpForm.getTel());
            member.setMoney(1000000);
            memberService.join(member);
        }
        catch (IllegalStateException e)
        {
            log.error("중복된 아이디 입력됨 !!");
            return null;
        }
        return member;
    }

    @PostMapping("/login")
    public Member result(@RequestBody LoginForm loginForm){
        Member member = new Member();
        member.setId(loginForm.getId());
        member.setPassword(loginForm.getPassword());

        Member loginMember = memberService.login(member);
        if(loginMember != null) {
            return loginMember;
        }
        else
        {
            // fail
            return null;
        }
    }

}
