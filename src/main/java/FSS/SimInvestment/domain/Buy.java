package FSS.SimInvestment.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Buy {

    @Id @GeneratedValue
    private Long key;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_key")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY) // LAZY 로 설정해두면 DB에서 Buy 객체를 불러왔을 때 Member 관련 쿼리를 날리지 않음. 나중에 member에 진짜 접근할 때 실제로 쿼리가 날아감 !!
    @JoinColumn(name = "member_key")
    private Member member;

    private int count;

    private int totalPrice;

    private int startPrice; // 매입 시 초기 1주당 가격

}
