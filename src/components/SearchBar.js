// this is the search from your old application.

// need to set the background of this to something, re style slightly, etc. (make search a small mag icon, etc.)
// shrink the searchbar too, etc.
import React,{useState} from "react";
function SearchBar({}) {
    // make controleld form, pass this value up so you know what to render in selected component.
    return (      
        <div className="mt-0 max-w-md mx-auto sm:flex sm:justify-center md:mt-0">
            <div className="mt-0 sm:mt-8">
                <form id='searchForm' action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="search" className="sr-only">Search</label>
                      <input id="searchBar" type="search" placeholder="Search..." className="background-gray-200 block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"/>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900">Search!</button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">Search for any project you're interested in... ex: 'solana'</p>
                </form>
              </div>
          </div>
      );
    }
    
export default SearchBar;