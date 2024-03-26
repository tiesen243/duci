'use client'

import { useRouter } from 'next/navigation'
import useSWRMutation from 'swr/mutation'

import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { FormField } from '@/components/ui/form-field'
import { Typography } from '@/components/ui/typography'
import { api } from '@/lib/api'
import type { SignupDto } from '@/server/models/user.model'

export const Form: React.FC = () => {
  const router = useRouter()

  const { trigger, error, isMutating } = useSWRMutation<Res, Error, string, SignupDto>('/signup', (_, { arg }) =>
    api.user.signup
      .post(arg)
      .then(({ error }) => (error ? Promise.reject(error.value) : Promise.resolve({ message: 'Sign up successful!' }))),
  )
  const action = (formData: FormData) => {
    trigger(Object.fromEntries(formData.entries()) as SignupDto).then(() => router.push('/auth/signin'))
  }

  return (
    <form action={action}>
      <CardContent className="space-y-4">
        {fields.map((field) => (
          <FormField key={field.name} {...field} message={error?.fieldsError?.[field.name]} />
        ))}
      </CardContent>
      <CardFooter className="grid grid-cols-1 gap-4">
        <Typography>
          Already have an account?{' '}
          <Typography as="link" href="/auth/signin">
            Sign in
          </Typography>
        </Typography>
        <Button isLoading={isMutating}>Register</Button>
      </CardFooter>
    </form>
  )
}

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
]
