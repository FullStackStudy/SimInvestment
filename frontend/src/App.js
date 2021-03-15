import Button from './components/Button';

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
        </>
    );
}

export default App;
