import { useState } from 'react'
import { Table } from './components/Table'

const usersData = {
  1: [
    { name: 'Alice Johnson', class: 'Biology', attendance: 'confirmed' },
    { name: 'Bob Smith', class: 'History', attendance: 'confirmed' },
    { name: 'Emily Davis', class: 'Mathematics', attendance: 'confirmed' },
    { name: 'Daniel Wilson', class: 'Physics', attendance: 'denied' },
    { name: 'Sophia Brown', class: 'Chemistry', attendance: 'confirmed' },
    { name: 'Liam Martinez', class: 'English', attendance: 'confirmed' },
    { name: 'Olivia Anderson', class: 'Geography', attendance: 'confirmed' },
    { name: 'William Taylor', class: 'Art', attendance: 'confirmed' },
    { name: 'Ava Thomas', class: 'Music', attendance: 'confirmed' },
    { name: 'James Garcia', class: 'Drama', attendance: 'confirmed' },
  ],
  2: [
    {
      name: 'Mia Hernandez',
      class: 'Computer Science',
      attendance: 'confirmed',
    },
    {
      name: 'Benjamin Lopez',
      class: 'Physical Education',
      attendance: 'confirmed',
    },
    { name: 'Charlotte Gonzales', class: 'Economics', attendance: 'confirmed' },
    { name: 'Elijah Perez', class: 'Psychology', attendance: 'confirmed' },
    { name: 'Amelia Scott', class: 'Sociology', attendance: 'confirmed' },
    {
      name: 'Lucas Turner',
      class: 'Political Science',
      attendance: 'confirmed',
    },
    { name: 'Harper Cooper', class: 'Philosophy', attendance: 'denied' },
    { name: 'Mason Reed', class: 'Statistics', attendance: 'confirmed' },
    { name: 'Evelyn Bailey', class: 'Anthropology', attendance: 'confirmed' },
    { name: 'Logan Bell', class: 'Literature', attendance: 'confirmed' },
  ],
  3: [
    { name: 'Avery Hughes', class: 'Business', attendance: 'denied' },
    { name: 'Ella Ward', class: 'Marketing', attendance: 'confirmed' },
    { name: 'Jackson Coleman', class: 'Finance', attendance: 'confirmed' },
    { name: 'Scarlett Russell', class: 'Management', attendance: 'confirmed' },
    {
      name: 'Sebastian Long',
      class: 'Human Resources',
      attendance: 'confirmed',
    },
    {
      name: 'Luna Foster',
      class: 'Information Technology',
      attendance: 'confirmed',
    },
  ],
  count: 27,
}

function App() {
  const [data, setData] = useState(usersData[1])
  const onPageChange = (page) => {
    setData(usersData[page])
  }
  return (
    <div>
      <Table count={usersData.count} limit={10} onChange={onPageChange}>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Class</Table.Cell>
            <Table.Cell>Attendance</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.map((user) => (
            <Table.Row key={user.name}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.class}</Table.Cell>
              <Table.Cell>{user.attendance}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default App
