package FSS.SimInvestment.controller;

import FSS.SimInvestment.domain.Member;
import FSS.SimInvestment.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Slf4j
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/join")
    public String joinPage(Model model)
    {
        model.addAttribute("member", new Member());
        return "join";
    }

    @PostMapping("/join")
    public String join(@ModelAttribute Member member)
    {
        try {
            memberService.join(member);
        }
        catch (IllegalStateException e)
        {
            log.error("중복된 아이디 입력됨 !!");
            return "join";
        }
        return "redirect:/";
    }

    @GetMapping("/login")
    public String login(Model model){
        model.addAttribute("member", new Member());
        return "login";
    }

    @PostMapping("/login")
    public String result(@ModelAttribute Member member, Model model){
        Member loginMember = memberService.login(member);
        if(loginMember != null) {
            model.addAttribute(member);
            return "result";
        }
        else
        {
            return "login";
        }
    }

}
