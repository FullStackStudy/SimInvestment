import Button from './components/Button';
import Input from './components/Input';

function App() {
    return (
        <>
            <Button color="gray" size="large">
                큰 회색 버튼
            </Button>
            <Button onClick={() => alert('빨간 버튼 클릭됨!')} color="red">
                빨간 버튼
            </Button>
            <Button color="blue" size="small">
                작은 파란 버튼
            </Button>
            <form>
                <Input type="text" placeholder="내용을 입력하세요." size="large" />
                <Input type="text" placeholder="내용을 입력하세요." size="medium" />
                <Input type="text" placeholder="내용을 입력하세요." size="small" />
            </form>
        </>
    );
}

export default App;
