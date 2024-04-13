'use client'

import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";


export default function Home() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleAddNumber = (number: string) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handlesum = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(Number(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleSub = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(Number(sub))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleMulti = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const multi = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(Number(multi))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleDivision = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('÷')
    } else {
      const divi = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(Number(divi))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber != '0' && operation != '' && currentNumber  != '0') {
      switch(operation) {
        case '+':
          handlesum()
          break
        case '-':
          handleSub()
          break
        case 'x':
          handleMulti()
          break
        case '÷':
          handleDivision()
          break
      }

    } 
  }

  return (
    <section className="bg-white w-2/5 min-h-96">
        <Input value={currentNumber} />

        <section className=" flex flex-row justify-between items-center">
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="C" onClick={handleClear} />
            <Button label="÷" onClick={handleDivision}/>
            <Button label="x" onClick={handleMulti}/>
        </section>

        <section className=" flex flex-row justify-between items-center">
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={handleSub}/>
        </section>

        <section className=" flex flex-row justify-between items-center">
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={handlesum} />
        </section>

        <section className=" flex flex-row justify-between items-center">
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
        </section>
    </section>

  );
}
