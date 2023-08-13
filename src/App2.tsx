/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from '@mui/material';
import { ChangeEvent, FormEventHandler, useState } from 'react';
import { Form, FormType } from './schemas/form';

function App2() {
  return (
    <FormComp />
  )
}

function FormComp() {

  const [data, setData] = useState<FormType>({
    name: '',
    password: '',
    email: '',
    percentage: 0,
    isAdmin: false
  });
  const [errors, setErrors] = useState<any>([]);

  const validate = () => {
    const parsedForm = Form.safeParse(data);
    console.log(parsedForm);
    if (parsedForm.success === false) {
      const {issues} = parsedForm.error;
      setErrors(issues);
    }
    console.log(errors);
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    validate();
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'isAdmin') {
      setData((prev: any) => ({ ...prev, [name]: !prev.isAdmin }));
    }
    else {
      setData((prev: any) => ({ ...prev, [name]: value }));
    }
  }

  const getError = (path: any) => {
    const error = errors.find((error) => error.path == path);
    return error ? (
      <small style={{color: 'red'}}>{error?.message}</small>
    ) : null
  }


  return (
    <Card style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
      alignItems: 'center',
      margin: 200
    }}>
      <h1>React form validation with zod</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input placeholder='Name'
            type='text'
            name='name'
            value={data.name}
            onChange={onChange}
          />
          {getError('name')}
        </div>
        <div>
          <label>Password</label>
          <input placeholder='Password'
            type='password'
            name='password'
            value={data.password}
            onChange={onChange}
          />
          {getError('password')}
        </div>
        <div>
          <label>Email Address</label>
          <input placeholder='Email Address'
            type='text'
            name='email'
            value={data.email}
            onChange={onChange}
          />
          {getError('email')}
        </div>
        <div>
          <label>Percentage</label>
          <input placeholder='Percentage'
            type='text'
            name="percentage"
            value={data.percentage}
            onChange={(e) => {
              const value = Number(e.target.value)
              setData((p: any) => ({ ...p, percentage: value }))
            }}
          />
          {getError('percentage')}
        </div>
        <div>
          <label>Is Admin</label>
          <input placeholder='Boolean'
            type='checkbox'
            name="isAdmin"
            checked={data.isAdmin}
            onChange={onChange}
          />
          {getError('isAdmin')}
        </div>

        <button type='submit'>Submit</button>
      </form>

    </Card>
  )
}
export default App2;