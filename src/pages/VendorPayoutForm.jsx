import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import axiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    beneficiaryName: "",
    accountNum: "",
    accountIFSC: "",
    bankName: "",
    payoutsRef: "",
    remarks: "",
    amount: "",
    narration: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(formData, "form data");

  const [errors, setErrors] = useState({});

  // Handle input change for all fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value, // Correctly map id to formData keys
    });
  };

  // Validate required fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.beneficiaryName)
      newErrors.beneficiaryName = "Beneficiary Name is required";
    if (!formData.accountNum)
      newErrors.accountNum = "Account Number is required";
    if (!formData.accountIFSC) newErrors.accountIFSC = "IFSC is required";
    if (!formData.bankName) newErrors.bankName = "Bank Name is required";
    if (!formData.payoutsRef)
      newErrors.payoutsRef = "Payout Reference is required";
    if (!formData.remarks) newErrors.remarks = "Remarks are required";
    if (!formData.amount) newErrors.amount = "Amount is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission (can be an API call here)
      try {
        const response = await axiosInstance.post(
          "/payment/vendorPayOut",
          formData
        );
        console.log(response, "response from vendor payment");

        // Show success toast with response message
        if (response && response.data && response.data.message) {
          toast.success(response.data.message, {
            position: "top-center",
          });
        } else {
          toast.success("Request submitted successfully", {
            position: "top-center",
          });
          setFormData({
            beneficiaryName: "",
            accountNum: "",
            accountIFSC: "",
            bankName: "",
            payoutsRef: "",
            remarks: "",
            amount: "",
            narration: "",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || error.message, {
          position: "top-center",
        });
      }
      console.log("Form Submitted: ", formData);

      // Reset form after successful submission
    }
  };

  return (
    <Container style={{ marginTop: 100, marginBottom: 100 }}>
      <h2 className="text-center text-secondary fade-in mb-3">Vendor PayOut</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="beneficiaryName">
            <Form.Label>
              Beneficiary Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              className="dashed"
              placeholder="Enter beneficiary name"
              value={formData.beneficiaryName}
              onChange={handleChange}
              isInvalid={!!errors.beneficiaryName}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.beneficiaryName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="accountNum">
            <Form.Label>
              Account Number <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              className="dashed"
              placeholder="Enter account number"
              value={formData.accountNum}
              onChange={handleChange}
              isInvalid={!!errors.accountNum}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.accountNum}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="accountIFSC">
            <Form.Label>
              Account IFSC <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              className="dashed"
              placeholder="Enter IFSC code"
              value={formData.accountIFSC}
              onChange={handleChange}
              isInvalid={!!errors.accountIFSC}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.accountIFSC}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="bankName">
            <Form.Label>
              Bank Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              className="dashed"
              placeholder="Enter bank name"
              value={formData.bankName}
              onChange={handleChange}
              isInvalid={!!errors.bankName}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.bankName}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="payoutsRef">
            <Form.Label>
              Payouts Reference <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              className="dashed"
              placeholder="Enter reference"
              value={formData.payoutsRef}
              onChange={handleChange}
              isInvalid={!!errors.payoutsRef}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.payoutsRef}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="remarks">
            <Form.Label>
              Remarks <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              className="dashed"
              placeholder="Enter remarks"
              value={formData.remarks}
              onChange={handleChange}
              isInvalid={!!errors.remarks}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.remarks}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="amount">
            <Form.Label>
              Amount <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              className="dashed"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              isInvalid={!!errors.amount}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.amount}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="narration">
            <Form.Label>Narration (Optional)</Form.Label>
            <Form.Control
              type="text"
              className="dashed"
              size="lg"
              placeholder="Enter narration"
              value={formData.narration}
              onChange={handleChange}
              isInvalid={!!errors.narration}
            />
            <Form.Control.Feedback type="invalid">
              {errors.narration}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button
          style={{
            width: "20%",
            marginTop: 30,
            padding: 10,
            background: "#520d2d",
            border: "none",
            marginLeft: 893,
            display: "block",
            fontSize: 22,
          }}
          variant="primary"
          type="submit"
          className="text-center"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PaymentForm;
