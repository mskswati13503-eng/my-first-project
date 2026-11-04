
import List from "./assets/components/List";

function App(){
  const subjects=['ict','web','math','physics','database','oops'];
  return(
  <>
  <h1 className="text-3xl font-bold text-red-900 ">title</h1>
  <h2 className="hover:text-purple-500 hover:text-5xl">learning react</h2>
  <List items={subjects}/>
  </>
  );
}
export default App