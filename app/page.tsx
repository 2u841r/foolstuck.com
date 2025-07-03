"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Coffee, Bug, Zap, Clock, Brain, Skull } from "lucide-react"

export default function FoolStuckWebsite() {
  const [currentJoke, setCurrentJoke] = useState(0)
  const [progress, setProgress] = useState(0)

  const jokes = [
    "Spent 3 hours debugging... forgot to save the file",
    "Googled 'how to center a div' for the 847th time",
    "Copy-pasted code from Stack Overflow, it worked, no idea why",
    "Rubber duck debugging with actual rubber duck",
    "Blamed the framework, turns out I had a typo",
    "Spent all day on a bug, fixed it by adding a semicolon",
  ]

  const fullStackSkills = [
    { skill: "React/Next.js", level: 95, icon: "⚛️" },
    { skill: "Node.js/Express", level: 90, icon: "🟢" },
    { skill: "Database Design", level: 88, icon: "🗄️" },
    { skill: "DevOps/AWS", level: 85, icon: "☁️" },
    { skill: "TypeScript", level: 92, icon: "📘" },
    { skill: "Testing", level: 80, icon: "🧪" },
  ]

  const foolStuckSkills = [
    { skill: "Googling Error Messages", level: 99, icon: "🔍" },
    { skill: "Copy-Paste from Stack Overflow", level: 95, icon: "📋" },
    { skill: "Blaming the Computer", level: 100, icon: "🖥️" },
    { skill: "Rubber Duck Debugging", level: 85, icon: "🦆" },
    { skill: "Crying in Console", level: 90, icon: "😭" },
    { skill: "Turning It Off and On Again", level: 88, icon: "🔄" },
  ]

  const comparisons = [
    {
      scenario: "When encountering a bug",
      fullStack: "Systematically debugs using dev tools, logs, and testing",
      foolStuck: "Stares at screen for 2 hours, then asks rubber duck for help",
    },
    {
      scenario: "Learning new technology",
      fullStack: "Reads documentation, builds sample projects, understands concepts",
      foolStuck: "Watches 47 YouTube tutorials, still confused, copies random code",
    },
    {
      scenario: "Code review feedback",
      fullStack: "Appreciates constructive criticism, refactors thoughtfully",
      foolStuck: "Takes it personally, argues that 'it works on my machine'",
    },
    {
      scenario: "Deployment day",
      fullStack: "Has CI/CD pipeline, automated tests, rollback strategy",
      foolStuck: "Uploads files via FTP, prays to the coding gods",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentJoke((prev) => (prev + 1) % jokes.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">🤡</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Fool<span className="text-orange-500">Stuck</span>.com
                </h1>
                <p className="text-gray-600">Where developers get stuck on the simplest things</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-3 py-1 flex-shrink-0">
              <Bug className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline">99.9% Uptime*</span>
              <span className="sm:hidden">99.9%</span>
              <span className="text-xs ml-1 hidden sm:inline">*when not debugging</span>
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Full Stack Dev <span className="text-gray-400">vs</span>{" "}
            <span className="text-orange-500">Fool Stuck Dev</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Are you a sophisticated full-stack developer or do you belong to the elite club of developers who spend 3
            hours debugging only to realize you forgot to save the file?
          </p>

          {/* Rotating Jokes */}
          <Card className="max-w-2xl mx-auto mb-8 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3">
                <Coffee className="w-6 h-6 text-orange-500" />
                <p className="text-lg font-medium text-gray-700">"{jokes[currentJoke]}"</p>
                <Skull className="w-6 h-6 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              I'm Full Stack
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
            >
              <XCircle className="w-5 h-5 mr-2" />
              I'm Fool Stuck
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Skill Comparison</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full Stack Skills */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-green-500" />
                  Full Stack Developer
                </CardTitle>
                <CardDescription>Professional, competent, knows what they're doing</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {fullStackSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="flex items-center">
                          <span className="mr-2">{skill.icon}</span>
                          {skill.skill}
                        </span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fool Stuck Skills */}
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-orange-500" />
                  Fool Stuck Developer
                </CardTitle>
                <CardDescription>Passionate, persistent, perpetually puzzled</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {foolStuckSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="flex items-center">
                          <span className="mr-2">{skill.icon}</span>
                          {skill.skill}
                        </span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Real-World Scenarios</h3>

          <div className="space-y-8">
            {comparisons.map((comparison, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    {comparison.scenario}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 border-r border-gray-200">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        <span className="font-semibold text-green-700">Full Stack Dev</span>
                      </div>
                      <p className="text-gray-700">{comparison.fullStack}</p>
                    </div>
                    <div className="p-6 bg-orange-50">
                      <div className="flex items-center mb-3">
                        <XCircle className="w-5 h-5 mr-2 text-orange-500" />
                        <span className="font-semibold text-orange-700">Fool Stuck Dev</span>
                      </div>
                      <p className="text-gray-700">{comparison.foolStuck}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Are You Fool Stuck Right Now?</h3>

          <Tabs defaultValue="debugging" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="debugging">Debugging</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="deploying">Deploying</TabsTrigger>
            </TabsList>

            <TabsContent value="debugging" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current Debugging Status</CardTitle>
                  <CardDescription>How long have you been staring at this bug?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Time Spent Debugging</span>
                      <Badge variant="destructive" className="text-xs">
                        {Math.floor(progress / 10)}h
                      </Badge>
                    </div>
                    <Progress value={progress} className="h-4" />
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <Button variant="outline" className="h-16 bg-transparent">
                        <div className="text-center">
                          <div className="text-2xl mb-1">🦆</div>
                          <div>Talk to Rubber Duck</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-16 bg-transparent">
                        <div className="text-center">
                          <div className="text-2xl mb-1">☕</div>
                          <div>Get More Coffee</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="learning" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                  <CardDescription>Tutorial #47 and still confused?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-lg mb-4">YouTube tutorials watched: 47</p>
                    <p className="text-lg mb-4">Understanding level: Still confused</p>
                    <Button className="bg-orange-500 hover:bg-orange-600">Watch Tutorial #48</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deploying" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Deployment Status</CardTitle>
                  <CardDescription>It works on my machine! 🤷‍♂️</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🔥</div>
                    <p className="text-lg mb-4">Production Status: On Fire</p>
                    <p className="text-lg mb-4">Last Successful Deploy: 3 weeks ago</p>
                    <Button variant="destructive">Deploy and Pray</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-4xl mb-4">🤡</div>
          <h4 className="text-2xl font-bold mb-4">FoolStuck.com</h4>
          <p className="text-gray-400 mb-6">
            Proudly serving the developer community since we figured out how to deploy a website
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 FoolStuck.com</span>
            <span>•</span>
            <span>Made with ❤️ by <a href="https://github.com/2u841r" className="text-orange-400 hover:text-orange-300">Zubair Ibn Zamir</a></span>
            <span>•</span>
            <span>No rubber ducks were harmed</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
