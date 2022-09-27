import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
// import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
// import { RandomNumber } from "./components/restriction/RandomNumber";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Waway" isLoggedIn={false} /> */}

      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: "1px solid black", padding: "rem" }} /> */}

      {/* <LoggedIn />
      <User /> */}

      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Counter message="the count value is" /> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* 
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position="center" /> */}
      {/* 
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton> */}

      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="lg" color="primary">
        Label
      </Text>
    </div>
  );
}

export default App;
  