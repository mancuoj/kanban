import { ThemeToggle } from '@/components/theme-toggle'
import { TwScreenIndicator } from '@/components/tw-screen-indicator'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'

export function App() {
  const todoItems = [
    'Schedule perm',
    'Rewind VHS tapes',
    'Make change for the arcade',
    'Get disposable camera developed',
    'Learn C++',
    'Return Nintendo Power Glove',
  ]
  const doneItems = ['Pickup new mix-tape from Beth']
  const [todoList, todos] = useDragAndDrop<HTMLUListElement, string>(todoItems, { group: 'todoList' })
  const [doneList, dones] = useDragAndDrop<HTMLUListElement, string>(doneItems, { group: 'todoList' })

  return (
    <div className="relative font-sans antialiased">
      <div className="flex flex-col gap-5 items-center justify-center min-h-svh">
        <div className="flex gap-3 text-sm">
          <ScrollArea className="h-80 w-64 rounded-md border">
            <ul ref={todoList} className="p-2 flex flex-col gap-2">
              {todos.map(todo => (
                <li key={todo} className="p-2 rounded-md border">
                  {todo}
                </li>
              ))}
            </ul>
          </ScrollArea>
          <ScrollArea className="h-80 w-64 rounded-md border">
            <ul ref={doneList} className="p-2 flex flex-col gap-2">
              {dones.map(done => (
                <li key={done} className="p-2 rounded-md border">
                  {done}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
        <div className="flex gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon">
            <a className="iconify carbon--logo-github size-4.5" href="https://github.com/mancuoj-collective/react-tmpl-lite" />
          </Button>
        </div>
        <TwScreenIndicator />
      </div>
    </div>
  )
}
