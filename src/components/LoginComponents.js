import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class LoginComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorEmail: "",
    };
  }

  // handleChange = (event) => {
  //   const {
  //     target: { name, value },
  //   } = event;

  //   this.setState({ [name]: value });
  // };

  handleChangeUserEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    // console.log(event.target.value);
  };

  handleChangeUserPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    // console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // const { email, password } = this.state;

    console.log(this.state.email);
    console.log(this.state.password);

    const hasilEmail = this.state.email;
    const hasilPass = this.state.password;

    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (hasilEmail.match(regex) && hasilEmail !== "") {
      if (hasilPass.length > 6 && hasilPass !== "") {
        alert("login berhasil");
        this.setState({
          errorEmail: "",
        });
      } else {
        alert("Password harus lebih dari 6 character");
      }
    } else {
      this.setState({
        errorEmail: "Email Salah Penulisan",
      });
      alert(
        // login berhasil
        "format email gak valid"
      );
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form className="Form-Style" onSubmit={this.handleSubmit}>
              <Form.Group className=" email-style" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="email"
                  onChange={this.handleChangeUserEmail}
                  value={this.state.email}
                />

                <Form.Label style={{ color: "red" }}>
                  {this.state.errorEmail}
                </Form.Label>
              </Form.Group>

              <Form.Group
                className=" password-style"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={this.handleChangeUserPassword}
                  value={this.state.password}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="button-style"
                  type="submit"
                  value="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginComponents;
