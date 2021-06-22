import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { horizontalesLCScreen } from '../components/dc/horizontalesLCScreen'
import { horizontalesHCScreen } from '../components/HorizontalesHc/horizontalesHCScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { VerticalScreen } from '../components/marvel/VerticalScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'
import { Footer } from '../components/ui/Footer'

export const DashboardRoutes = () => {
    return (
        <>
        <Navbar />
        <div className="container mt-2"> 

                <Switch>
                    <Route exact path="/vertical" component={VerticalScreen}/>

                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>

                    <Route exact path="/horizontalesLC" component={horizontalesLCScreen }/>

                    <Route exact path="/horizontalesHC" component={ horizontalesHCScreen }/>

                    <Route exact path="/search" component={SearchScreen}/>


                     <Redirect to="/vertical"/>

                </Switch>
        </div>
        <Footer />
        </>
    )
}
