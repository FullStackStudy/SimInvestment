package FSS.SimInvestment.controller;

import FSS.SimInvestment.domain.Member;
import FSS.SimInvestment.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/login")
    public String login(Model model){
        model.addAttribute("member", new Member());
        return "login";
    }

    @PostMapping("/login")
    public String result(@ModelAttribute Member member, Model model){
        memberService.join(member);
        model.addAttribute(member);
        return "result";
    }

}
