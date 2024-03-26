import type { NextPage } from 'next'

import { Form } from './_form'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Page: NextPage = () => (
  <Card className="mx-auto max-w-screen-md">
    <CardHeader>
      <CardTitle>Register new account</CardTitle>
      <CardDescription>Create a new account to access all features.</CardDescription>
    </CardHeader>

    <Form />
  </Card>
)

export default Page
