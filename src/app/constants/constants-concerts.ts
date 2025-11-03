import { Concert } from "../models/concert.model";

const ryan: string = 'Ryan Brock'
const addie: string = 'Addie Evans'
const brandon: string = 'Brandon Clark'
const aaron: string = 'Aaron Braswell'
const zach: string = 'Zach Haynes'
const will: string = 'Will Curnell'
const justin: string = 'Justin Darnell'

const STL: string = 'STL'
const delmarHall: string = 'Delmar Hall'
const hollywoodAmphitheater: string = 'Hollywood Casino Amphitheatre'

export const CONCERTS: Concert[] = [
    // new Concert('', [], '', '', '', []),
    //2025
    new Concert('Nikki Glaser (Alive and Unwell Tour - Filmed Hulu Special)', [''], 'The Fabouous Fox', STL, '2025/10/25', [ryan, addie]),
    new Concert('Black Pistol Fire (Flagrant Act of Bliss Tour)', [''], 'Bottom Lounge', 'Chicago, IL', '2025/10/16', [ryan, addie]),
    new Concert('HARBOUR', ['Sam MacPherson'], delmarHall, STL, '2025/07/31', [ryan, addie, 'Abagail Estes', 'Ty Householder']),
    new Concert('Amber Autry', [], 'Heliem Comedy Club', 'STL', '2025/07/20', [ryan, addie]),
    new Concert('The Blue Stones (North America Tour `25)', ['Meltt'], delmarHall, STL, '2025/06/24', [ryan, addie]),
    new Concert('Caamp', ['Gardener, Blind Pilot'], 'Stifel Theatre', STL, '2025/06/03', [ryan, addie]),
    new Concert('Wheatus (25th Anniversary Tour)', ['Rematch'], 'Blueberry Hill Duck Room', STL, '2025/04/15', [ryan, addie]),
    new Concert('ZZ Ward (The Dirty Sun Rour)', ['Liam St. John'], 'City Winery', STL, '2025/04/01', [ryan, addie]),
    new Concert('flipturn', [''], 'The Hawthorn', STL, '2025/03/19', [ryan, addie, 'Abagail Estes', 'Ty Householder']),

    //2024
    new Concert('Kacey Musgraves (Deeper Well Tour)', ['Nickel Creek, Lord Huron'], 'Bridgestone Arena', 'Nashville, TN', '2024/12/06', [ryan, addie]),
    new Concert('Kacey Musgraves (Deeper Well Tour)', ['Nickel Creek, Lord Huron'], 'KFC Yum! Center', 'Lousville, KY', '2024/11/12', [ryan, addie]),
    new Concert('Mt. Joy', [''], 'Ascend Amphitheater', 'Nashville, TN', '2024/09/24', [ryan, addie]),
    new Concert('King Gizzard and the Lizard Wizard', ['Geese'], 'The Factory', STL, '2024/09/05', [ryan, addie]),
    new Concert('Black Pistol Fire', ['Dan Spencer'], 'The Basement', 'Nashville, TN', '2024/08/28', [ryan, addie]),
    new Concert('Green Day', ['The Linda Lindas', 'Rancid'], hollywoodAmphitheater, STL, '2024/08/15', [ryan, addie]),
    new Concert('Bush', ['Candlebox', 'Jerry Cantrell'], 'STL Music Park', STL, '2024/08/10', [ryan, will, justin]),
    new Concert('P!NK', ['Sheryl Crow', 'KidCutUp'], 'The Dome', STL, '2024/08/10', [addie, 'Mary Evans']),
    new Concert('Phish', [''], 'Chaifetz Arena', STL, '2024/07/30', [ryan, addie]),
    new Concert('Portugal The Man', ['Reyna Tropical'], 'The Pageant', STL, '2024/05/06', [ryan, addie]),
    new Concert('Greta van Fleet', ['Geese'], 'Chaifetz Arena', STL, '2024/04/27', [ryan, addie, 'Abagail Estes', 'Ty Householder']),
    new Concert('Hannah Berner', ['Sara Huntington'], 'The Factory', STL, '2024/04/17', [ryan, addie]),

    //2023
    new Concert('Zeds Dead', ['Rusko', 'Heyz'], 'The Factory', STL, '2023/12/29', [ryan, addie]),
    new Concert('Dirty Honey', ['Austin Meade'], 'The Hawthorn', STL, '2023/12/15', [ryan, addie]),
    new Concert('The Urge', ['Tree One Four', 'Wisemary'], 'The Pageant', STL, '2023/11/24', [ryan, addie, brandon]),
    new Concert('Mt. Joy', ['flipturn'], 'Ascend Amphitheater', 'Nashville, TN', '2023/10/21', [ryan, addie]),
    new Concert('Hannah Berner', ['Sara Huntington'], 'The Truman', 'Kansas City, MO', '2023/10/20', [ryan, addie]),
    new Concert('ZZ Ward', ['Jamie Wyatt'], delmarHall, STL, '2023/09/23', [ryan, addie]),
    new Concert('Mt. Joy', ['flipturn'], 'STL Music Park', STL, '2023/08/15', [ryan, addie]),
    new Concert('Candlebox', ['Judah Taylor', 'Rubikon'], delmarHall, STL, '2023/08/13', [ryan, addie, brandon]),
    new Concert('Ghost', ['Amon Amarth'], hollywoodAmphitheater, STL, '2023/08/11', [ryan, addie, 'Jonathan Brock']),
    new Concert('Nickelback', ['Brantley Gilbert'], hollywoodAmphitheater, STL, '2023/08/03', [ryan, addie, brandon]),
    new Concert('Paramore', ['The Linda Lindas', 'Foals'], 'Enterprise Center', STL, '2023/07/30', [ryan, addie, 'Natalie Clark', brandon]),
    new Concert('Taylor Swift (Eras Tour)', ['MUNA', 'Gracie Abrams'], 'Empower Field at Mile High', 'Denver, Colorado', '2023/07/15', [ryan, addie]),
    new Concert('String Cheese Incident', ['ft. John Fogerty'], 'Red Rock Amphitheater', 'Morrison, Colorado', '2023/07/14', [ryan, addie, zach]),
    new Concert('The Blue Stones', ['The Velveeters'], delmarHall, STL, '2023/05/24', [ryan, addie, brandon]),
    new Concert('Aries Spears', [], 'Heliem Comedy Club', 'STL', '2023/01/06', [ryan, addie, 'Sara Snider', 'Tanya', 'Alivia Collier']),

    //2022
    new Concert('Black Pistol Fire', ['Shooks'], delmarHall, STL, '2022/08/09', [ryan, addie]),

    //2021
    new Concert('Korn', ['Staind'], hollywoodAmphitheater, STL, '2021/09/05', [ryan, addie, brandon, 'Michael Shouse']),
    new Concert('Foo Fighters', ['Radkey'], hollywoodAmphitheater, STL, '2021/08/03', [ryan, addie, brandon, aaron]),
    new Concert('Skillet', ['Jordan Feliz', 'Colton Dixon'], 'Drive In', 'Chaffee, Missouri', '2021/05/23', [ryan, brandon, aaron, 'Natalie Clark', 'Michael Shouse', 'Will Curnell']),

    //2019
    new Concert('Rob Thomas', ['John K'], 'Ballpark Village', STL, '2019/12/07', [ryan, brandon]),
    new Concert('Rusko', ['Cromatik'], 'The Old Rock House', STL, '2019/11/27', [ryan, zach, 'Sara Hovis', 'Ariel']),
    new Concert('Nick Offerman', [], 'Stifel Theatre', STL, '2019/11/07', [ryan, 'Katilyn Wieberg']),
    new Concert('Sluggtopia III', ['Kill The Noise', 'Rusko', 'Snails'], 'Red Rock Amphitheater', 'Morrison, Colorado', '2019/10/04', [ryan, zach, 'Ray', 'Ryan', 'Nick', 'Others...']),
    new Concert('Halestorm', ['Godsmack'], 'Show Me Center', 'Cape Girardeau', '2019/10/27', [ryan, brandon]),
    new Concert('Wayback Pointfest', ['Cowboy Mouth', 'Stir', 'Goldfinger', 'Living Colour', 'Gin Blossoms', 'Everclear', 'The Urge', 'Collective Soul'], hollywoodAmphitheater, STL, '2019/08/31', [ryan, brandon, 'Kaitlyn Wieberg']),
    new Concert('Rob Thomas', ['Abby Anderson'], 'Breese Stevens Field', 'Madison, Wisconsin', '2019/06/07', [ryan, 'Landon Robert']),
    new Concert('Sabroso Fest', ['Kobayashi (the eater)', 'Dwarves', 'Black Falg', 'Strung Out', 'The Vandals', 'Bad Religion', 'The Offspring'], 'Fiddlers Green Amphitheatre', 'Eaglewood, Colorado', '2019/04/28', [ryan, zach]),

    //2017
    new Concert('Flying Lotus in 3D', ['So So Topic'], 'EXDO Event Center', 'Denver, Colorado', '2017/11/17', [ryan, zach, 'Destanie Raines']),

    //2015
    new Concert('Shinedown', ['Sevendust', 'Breaking Benjamin'], 'Show Me Center', 'Cape Girardeau, MO', '2015/11/15', [ryan, 'Bjorn Preumer', 'Brett Preumer']),

    //2009
    new Concert('Judas Priest', ['Whitesnake'], 'The Family Arena', STL, '2009/07/01', [ryan, zach]),
    
    //2008
    new Concert('3 Doors Down', ['12 Stones', 'Sick Puppies'], 'Black River Coliseum', 'Poplar Bluff, Missouri', '2008/04/02', [ryan, 'Catrina Stone', 'James Summers']),
  ]