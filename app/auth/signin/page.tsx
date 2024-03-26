import type { NextPage } from 'next'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Form from './_form'

const Page: NextPage = () => {
  return (
    <Card className="mx-auto max-w-screen-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Fill in the form below to sign in to your account.</CardDescription>
      </CardHeader>

      <Form />
    </Card>
  )
}

export default Page
