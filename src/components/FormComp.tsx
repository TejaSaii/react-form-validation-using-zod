import { Card } from '@mui/material';
import FieldComp from './FieldComp';

function FormComp() {
  return (
    <Card style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div><h1>Welcome to form with zod validations</h1></div>
      <FieldComp/>
    </Card>
  )
}

export default FormComp;