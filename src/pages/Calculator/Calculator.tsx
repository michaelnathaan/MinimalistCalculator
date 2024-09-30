import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');

  const performCalculation = (num1: number, num2: number, operator: string): string => {
    let result = '';
    switch (operator) {
      case '+':
        result = (num1 + num2).toString();
        break;
      case '-':
        result = (num1 - num2).toString();
        break;
      case 'x':
        result = (num1 * num2).toString();
        break;
      case '/':
        if (num2 !== 0) {
          result = (num1 / num2).toString();
        } else {
          result = 'Err';
        }
        break;
      default:
        result = 'Err';
        break;
    }
    return result;
  };
  
  const handleButtonClick = (value: string): void => {
    if (value === '=') {
      try {
        if (firstNumber && secondNumber && symbol) {
          const num1 = parseFloat(firstNumber);
          const num2 = parseFloat(secondNumber);
          const calculatedResult = performCalculation(num1, num2, symbol);
          setHistory([...history, `${calculatedResult}`]);
          setFirstNumber('');
          setSecondNumber('');
          setSymbol('');
          setInput(calculatedResult);
        } else {
          setInput('Err');
        }
      } catch (error) {
        setInput('Err');
      }
    } else if (value === 'C') {
      setInput('');
      setFirstNumber('');
      setSecondNumber('');
      setSymbol('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (['+', '-', 'x', '/'].includes(value)) {
      if (!firstNumber) {
        setFirstNumber(input);
        setSymbol(value);
        setInput(input + value);
      }
    } else if (value === '?'){
      window.location.href = '/support-ticket';
    } else {
      setInput(input + value);
      if (symbol) {
        setSecondNumber(secondNumber + value);
      } 
    }
  };

  return (
    <Container className="calculator">
      <Row className="top-container bg-grey">
        <Col xs={4} className="scrollable-history">
          {history.map((entry, index) => (
            <div className="history" key={index}>{entry}</div>
          ))}
        </Col>
        <Col className="d-flex flex-column justify-content-end align-items-end">
          <div className="result align-bottom">{input || '0'}</div>
        </Col>
      </Row>
      <Row className="buttons">
        {['C', 'DEL', '?', '/', '1', '2', '3', 'x', '4', '5', '6', '-', '7', '8', '9', '+', '0', '='].map(
          (value, index) => (
            <Col key={index} xs={value === '0' || value === '=' ? 6 : 3} className="mt-3">
              <Button
                variant="primary"
                className={`custom-button ${value === '?' ? 'custom-button-brown' : value === '/' || value === 'x' || value === '-' || value === '+' || value === '=' ? 'custom-button-orange' : ''} ${value === '0' || value === '=' ? 'custom-button-wider' : 'rounded-circle'}`}
                onClick={() => handleButtonClick(value)}>
                {value}
              </Button>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
}

export default Calculator;
