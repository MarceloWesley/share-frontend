"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sigUpSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";

function SignUp() {
  const form = useForm<z.infer<typeof sigUpSchema>>({
    resolver: zodResolver(sigUpSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
      codeControll: false,
    },
  });

  function onSubmit(values: z.infer<typeof sigUpSchema>) {
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

            <FormField
              control={form.control}
              name="codeControll"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0  pl-1">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Fui indicado por um amigo</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="pl-[0.5px]">Code</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!form.watch("codeControll")}
                      type="password"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full bg-indigo-600" type="submit">
            SIGN UP
          </Button>
        </form>
      </Form>
      <div>
        <p>
          Já tem uma conta ?{" "}
          <span className="text-indigo-600 hover:underline">
            <Link href="sign-in">Faça login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
