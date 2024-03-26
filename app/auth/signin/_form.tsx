'use client'

import { useRouter } from 'next/navigation'
import { useFormStatus } from 'react-dom'
import useSWRMutation from 'swr/mutation'

import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { FormField } from '@/components/ui/form-field'
import { Typography } from '@/components/ui/typography'
import type { SigninDto } from '@/server/models/user.model'
import { login } from './_action'

const Form: React.FC = () => {
  const router = useRouter()
  const { trigger, error } = useSWRMutation<Res, Error, string, SigninDto>('/signin', (_, { arg }) =>
    login(arg).then((res) =>
      !res.success ? Promise.reject(res) : Promise.resolve({ message: 'Sign in successful!' }),
    ),
  )

  const action = (formData: FormData) => {
    trigger(Object.fromEntries(formData.entries()) as SigninDto).then(() => {
      router.push('/')
      router.refresh()
    })
  }

  return (
    <form action={action}>
      <CardContent className="space-y-4">
        <FormField label="Email" name="email" message={error?.fieldsError?.email} />
        <FormField label="Password" name="password" type="password" message={error?.fieldsError?.password} />
      </CardContent>
      <CardFooter className="grid grid-cols-1 gap-4">
        <Typography>
          Don&apos;t have an account?{' '}
          <Typography as="link" href="/auth/signup">
            Register now
          </Typography>
        </Typography>

        <SubmitButton />
      </CardFooter>
    </form>
  )
}

export default Form

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()
  return <Button isLoading={pending}>Sign In</Button>
}
