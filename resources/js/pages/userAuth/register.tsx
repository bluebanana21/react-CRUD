'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
    name_9897551689: z.string().min(1),
    name_0419117602: z.string(),
    name_4357651246: z.boolean(),
});

export default function MyForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>,
            );
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Register</CardTitle>
                            <CardDescription>Register page lol</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-3xl space-y-8 py-10">
                                    <FormField
                                        control={form.control}
                                        name="name_9897551689"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Linus" type="" {...field} />
                                                </FormControl>
                                                <FormDescription>This is your public display name.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="name_0419117602"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <PasswordInput placeholder="Placeholder" {...field} />
                                                </FormControl>
                                                <FormDescription>Enter your password.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="name_4357651246"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                                                <FormControl>
                                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>Admin priviliges</FormLabel>
                                                    <FormDescription>Toggle if admin</FormDescription>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex flex-col gap-3">
                                        <a href="#" className="inline-block text-sm underline-offset-4 hover:underline">
                                            Already have an account?
                                        </a>
                                    </div>

                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
