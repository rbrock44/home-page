import { Match } from "../models/match.model";

const ryan: string = 'Ryan Brock'
const addie: string = 'Addie Evans'
const will: string = 'Will Curnell'
const zach: string = 'Zach Haynes'

const STL: string = 'STL'

const basketball: string = 'Basketball';
const baseball: string = 'Baseball';
const hockey: string = 'Hockey';
const football: string = 'Football';

export const MATCHES: Match[] = [

    //2026
    new Match('Savannah Bananas', 'Loco Beach Coconuts', 'SB 4-3', 'Savannah Ball', 'Busch Stadium', STL, '2026/08/22', [ryan, addie, 'Hooper Family']),

    // new Match('', '', '', '', '', '', '', []),
    //2024
    new Match('STL Cardinals', 'Arizona Diamondbacks', 'AZ 14-1', baseball, 'Busch Stadium', STL, '2024/04/23', [ryan, addie]),
    new Match('Memphis Grizzlies', 'Denver Nuggets', 'DEN 126-111', basketball, 'FedExForum', 'Memphis, Tennessee', '2024/03/14', [ryan, addie, will]),
    new Match('Memphis Grizzlies', 'LA Clippers', 'LA 128-119', basketball, 'FedExForum', 'Memphis, Tennessee', '2024/01/12', [ryan, addie, will]),

    //2023
    
    //2022

    //2021

    //2019
    new Match('STL Blues (Game 7 Stanley Cup)', 'Boston Bruins', 'STL 4-1', hockey, 'Busch Stadium', STL, '2019/06/12', [ryan, 'Sara Hovis', 'Billy Atkins', 'Sidhant Amatya', 'Brandon Clark']),
    new Match('Denver Nuggets (Game 7 Playoffs 1st Round)', 'San Antonio Spurs', 'DEN 90-86', basketball, 'Ball Arena', 'Denver, Colorado', '2019/04/27', [ryan, zach, 'Taylor (Zach roommate)']),

    //2017
    new Match('Denver Broncos', 'Cincinnati Bengals', 'CIN 20-17', football, 'Empower Field at Mile High', 'Denver, Colorado', '2017/11/22', [ryan, zach, 'Destanie Raines', 'Zach\'s Friend']),
    
    //2016
    new Match('Team USA', 'Venezuala', 'USA 80-45', basketball, 'United Center', 'Chicago, IL', '2016/07/29', [ryan, 'Ryan Fortner', 'Nick Bollinger']),

    //2015
    new Match('STL Cardinals', 'Pittsburgh Pirates', 'STL 3-2', baseball, 'Busch Stadium', STL, '2015/05/03', [ryan, 'Bjorn Pruemer', 'Bjorns Friend']),
    
    //2014
    new Match('STL Rams', 'Denver Broncos', 'DEN 22-7', football, 'Edward Jones Dome', STL, '2014/11/16', [ryan]),

    //2013
    new Match('STL Cardinals', 'San Francisco Giants', 'STL 8-0', baseball, 'Busch Stadium', STL, '2013/06/01', [ryan, 'Dominic Hooper', 'Allen Collier', 'Chris Snider']),
  ]