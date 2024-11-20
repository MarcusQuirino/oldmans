import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function BoaDeHjPage() {
  return (
    <main className="min-h-screen text-foreground flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Boa de hoje</h1>
      <Card>
        <CardHeader>
          <CardTitle>Boa de hoje</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Boa de hoje</p>
        </CardContent>
        <CardFooter>
          <Button>Gerar</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
