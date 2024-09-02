import LeftSideBar from "./components/ux/LeftSideBar";
import MainContent from "./components/ux/MainContent";
import Navbar from "./components/ux/Navbar";
import RightSideBar from "./components/ux/RightSideBar";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background bg-[url('/spot.jpg')] bg-cover">
      <Navbar />
      <main className="flex-1">
        <div className="border-b">
          <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">

            {/* Left Sidebar */}
            <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
              <LeftSideBar />
            </aside>

            {/* Main Content */}
            <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
              <div className="w-full min-w-0 mx-auto">
                <MainContent />
              </div>
              <div className="hidden text-sm xl:block">
                <RightSideBar />
              </div>
            </main>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

