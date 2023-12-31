import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = auth()
  // this may never be seen -- because middleware is protecting it someone visiting the route would be redirected to sign-in
  return NextResponse.json({ route: `Protected Route with Auth - ${user?.userId ? user.userId : 'No user'}` })
}
