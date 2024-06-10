"use server"

import { LoginData } from "@/entities"
import { $api } from "@/shared"

export default async function signin(login: string, password: string): Promise<LoginData | string> {
  try {
    const res = await $api.post<LoginData>(`/auth/login`, {login, password})
    return res.data
  } catch (e: any) {
    return e?.response?.data?.message
  }
}