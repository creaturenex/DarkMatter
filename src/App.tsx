import LeftSideBar from "./components/ux/LeftSideBar";
import Navbar from "./components/ux/Navbar";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background bg-[url('/spot.jpg')] bg-cover">
      <Navbar />
      <main className="flex-1">
        <div className="border-b">
          <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            This should be the sidebar
        
              <LeftSideBar />
            
          </aside>
          <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">Main content ie docs examples 
            <div className="w-full min-w-0 mx-auto">
              <div className="h-48 bg-gray-200 border rounded bg-opacity-60 w-96 border-stone-400"></div>
            </div>
            <div className="hidden text-sm xl:block">
              <div className="sticky pt-4 -mt-10 top-16">
                This would be the second scroll area
              this text should be hidden afer xl media point
              </div>
            </div>
          </main>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

