import Badge from "./core/components/badge/Badge";
import Button from "./core/components/button/Button";
import Card from "./core/components/card/Card";

function App() {
  return (
    <div>
      <Button>Details</Button>
      <Button variant="default">
        <span>D</span>
      </Button>
      <Button shape="circle">
        <span>D</span>
        <span>dasdasds</span>
      </Button>
      <Button shape="circle" variant="default">
        D
      </Button>
      <Badge>Badge 1</Badge>
      <Card
        color="aqua"
        company_image="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
        company_name="Amazon"
        createAt="10/10/2024"
        location="San Francisco, CA"
        salary_per_hour={200}
        tags={["Part time", "Senior Level", "Distant"]}
        title="Senior UX/UI Designer"
      />
    </div>
  );
}

export default App;
