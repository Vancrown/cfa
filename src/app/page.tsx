'use client';

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-menubar";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main >
      <div className="max-w-3xl mx-auto cursor-pointer" onClick={() => router.push('/episodes')}>
        <Card>
          <CardHeader>
            <CardTitle>CFA知识点总结</CardTitle>
            <CardDescription>持续更新中...</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Financial Statement Analysis</li>
              <li>Portfolio Management</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant='ghost'>详情</Button>
          </CardFooter>
        </Card>
      </div>
    </main >
  )
}
