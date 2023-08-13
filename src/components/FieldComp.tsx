import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { ChangeEvent, MouseEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Form } from "../schemas/form";
import { dataState } from "../store/atoms/data";
import { errorsState } from "../store/atoms/error";
import { adminState, emailState, nameState, passwordState, percentState } from "../store/selectors/fieldStates";

function FieldComp() {

  const [data, setData] = useRecoilState(dataState);

  const name = useRecoilValue(nameState);
  const password = useRecoilValue(passwordState);
  const email = useRecoilValue(emailState);
  const percentage = useRecoilValue(percentState);
  const admin = useRecoilValue(adminState);

  const [errors, setErrors] = useRecoilState(errorsState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'isAdmin') {
      setData((prev) => ({ ...prev, [name]: !prev.isAdmin }));
    }
    else if (name === 'percentage') {
      setData((prev) => ({ ...prev, [name]: Number(value) }))
    }
    else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const parsedForm = Form.safeParse(data);
    if (parsedForm.success === false) {
      const { issues } = parsedForm.error;
      setErrors(issues);
    }
    else {
      setErrors([]);
      console.log(data);
    }
  }

  function Error(props: { path: string }) {
    const path = props.path;
    const error = errors.find((error) => (error.path == path));
    return error ?
      <Typography variant='subtitle2' color='red'>{error.message}</Typography>
      : null
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <TextField variant='outlined' label='Name' name='name' value={name} onChange={handleChange}></TextField>
      <Error path='name' />
      <TextField variant='outlined' label='Password' name='password' value={password} onChange={handleChange}></TextField>
      <Error path='password' />
      <TextField variant='outlined' label='email' name='email' value={email} onChange={handleChange}></TextField>
      <Error path='email' />
      <TextField variant='outlined' label='Percentage' type="number" name='percentage' value={percentage} onChange={handleChange}></TextField>
      <Error path='percentage' />
      <FormControlLabel control={<Checkbox checked={admin} name="isAdmin" onChange={handleChange} size="medium"/>} label='Admin?'></FormControlLabel>
      <Button variant='contained' onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default FieldComp;