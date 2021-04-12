package FSS.SimInvestment.controller;

import FSS.SimInvestment.domain.Member;
import FSS.SimInvestment.dto.LoginForm;
import FSS.SimInvestment.dto.ResponseForm;
import FSS.SimInvestment.dto.SignUpForm;
import FSS.SimInvestment.dto.StatusEnum;
import FSS.SimInvestment.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/sign-up")
    public ResponseEntity<ResponseForm> join(@RequestBody SignUpForm signUpForm)
    {
        Member member = new Member();
        member.setName(signUpForm.getName());
        member.setId(signUpForm.getId());
        member.setPassword(signUpForm.getPassword());
        member.setEmail(signUpForm.getEmail());
        member.setTel(signUpForm.getTel());
        member.setMoney(1000000);
        memberService.join(member);

        ResponseForm response = new ResponseForm(StatusEnum.OK, "회원가입 성공");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/login")
    public Member result(@RequestBody LoginForm loginForm, HttpSession session){
        Member member = new Member();
        member.setId(loginForm.getId());
        member.setPassword(loginForm.getPassword());

        Member loginMember = memberService.login(member);
        if(loginMember != null) {
            session.setAttribute("loginKey", loginMember.getKey());
            return loginMember;
        }
        else
        {
            // fail
            return null;
        }
    }

}
