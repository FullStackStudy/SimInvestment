package FSS.SimInvestment.service;

import FSS.SimInvestment.domain.Member;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MemberServiceTest {

    @Autowired
    private MemberService ms;

    @Test
    public void 회원가입()
    {
        // Given
        Member member1 = new Member();
        member1.setId("fong");
        member1.setPassword("1234");
        member1.setName("Lee");

        // When
        Long savedKey = ms.join(member1);

        // Then
        assertEquals(member1, ms.findOne(savedKey).get());
    }

    @Test(expected = IllegalStateException.class)
    public void 중복아이디_회원가입_테스트()
    {
        // Given
        Member member1 = new Member();
        member1.setId("fong");
        member1.setPassword("1234");
        member1.setName("Lee");

        Member member2 = new Member();
        member2.setId("fong");
        member2.setPassword("4321");
        member2.setName("Kim");

        // When
        ms.join(member1);
        ms.join(member2);
    }

    @Test
    public void 로그인()
    {
        // Given
        Member member1 = new Member();
        member1.setId("fong");
        member1.setPassword("1234");
        member1.setName("Lee");
        member1.setTel("01011115555");
        ms.join(member1);

            // 성공하는 경우
        Member loginMember = new Member();
        loginMember.setId("fong");
        loginMember.setPassword("1234");

            // 비밀번호가 다른 경우
        Member passMember = new Member();
        passMember.setId("fong");
        passMember.setPassword("12345");
        
            // 아이디가 존재하지 않는 경우
        Member idMember = new Member();
        idMember.setId("fongg");
        idMember.setPassword("1234");

        // When
        Member loginSuc = ms.login(loginMember);
        Member passFail = ms.login(passMember);
        Member idFail = ms.login(idMember);


        // Then
        assertNull(passFail);
        assertNull(idFail);
        assertEquals(member1, loginSuc);
    }

}