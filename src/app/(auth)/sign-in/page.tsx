"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sigInSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

function SignIn() {
  const form = useForm<z.infer<typeof sigInSchema>>({
    resolver: zodResolver(sigInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof sigInSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-10 w-[500px] w-max[500px] p-2">
      <div>
        <h2 className="text-5xl text-center text-indigo-600">Share</h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="pl-[0.5px]">E-mail</FormLabel>
                  <FormControl>
                    <Input className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="pl-[0.5px]">Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full bg-indigo-600" type="submit">
            SIGN IN
          </Button>
        </form>
      </Form>
      <div>
        <p>
          Não tem uma conta ?{" "}
          <span className="text-indigo-600 hover:underline">
            <Link href="sign-up">Cadastre-se</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
