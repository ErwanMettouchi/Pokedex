import { sequelize } from '../models/client.js';
import { Type, Pokemon, Team } from '../models/associations.js';

console.log("🔄 Pokémon seeding started...");

const steelType    = await Type.create({ name: 'Acier', color: '#aaaabb' });
const fightingType = await Type.create({ name: 'Combat', color: '#bb5544' });
const dragonType   = await Type.create({ name: 'Dragon', color: '#7766ee' });
const waterType    = await Type.create({ name: 'Eau', color: '#3399ff' });
const electricType = await Type.create({ name: 'Électrik', color: '#ffbb33' });
const fireType     = await Type.create({ name: 'Feu', color: '#ff4422' });
const iceType      = await Type.create({ name: 'Glace', color: '#77ddff' });
const bugType      = await Type.create({ name: 'Insecte', color: '#aabb22' });
const normalType   = await Type.create({ name: 'Normal', color: '#bbaabb' });
const grassType    = await Type.create({ name: 'Plante', color: '#77cc55' });
const poisonType   = await Type.create({ name: 'Poison', color: '#aa5599' });
const psychicType  = await Type.create({ name: 'Psy', color: '#ff5599' });
const rockType     = await Type.create({ name: 'Roche', color: '#bbaa66' });
const groundType   = await Type.create({ name: 'Sol', color: '#ddbb55' });
const ghostType    = await Type.create({ name: 'Spectre', color: '#6666bb' });
const darkType     = await Type.create({ name: 'Ténèbres', color: '#665544' });
const flyingType   = await Type.create({ name: 'Vol', color: '#6699ff' });

await Pokemon.bulkCreate([
  { name: 'Bulbizarre', hp: 45, atk: 49, def: 49, atk_spe: 65, def_spe: 65, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Herbizarre', hp: 60, atk: 62, def: 63, atk_spe: 80, def_spe: 80, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Florizarre', hp: 80, atk: 82, def: 83, atk_spe: 100, def_spe: 100, speed: 80, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Salamèche', hp: 39, atk: 52, def: 43, atk_spe: 60, def_spe: 50, speed: 65, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Reptincel', hp: 58, atk: 64, def: 58, atk_spe: 80, def_spe: 65, speed: 80, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Dracaufeu', hp: 78, atk: 84, def: 78, atk_spe: 109, def_spe: 85, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Carapuce', hp: 44, atk: 48, def: 65, atk_spe: 50, def_spe: 64, speed: 43, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Carabaffe', hp: 59, atk: 63, def: 80, atk_spe: 65, def_spe: 80, speed: 58, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Tortank', hp: 79, atk: 83, def: 100, atk_spe: 85, def_spe: 105, speed: 78, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Chenipan', hp: 45, atk: 30, def: 35, atk_spe: 20, def_spe: 20, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Chrysacier', hp: 50, atk: 20, def: 55, atk_spe: 25, def_spe: 25, speed: 30, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Papilusion', hp: 60, atk: 45, def: 50, atk_spe: 80, def_spe: 80, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Aspicot', hp: 40, atk: 35, def: 30, atk_spe: 20, def_spe: 20, speed: 50, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Coconfort', hp: 45, atk: 25, def: 50, atk_spe: 25, def_spe: 25, speed: 35, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Dardargnan', hp: 65, atk: 80, def: 40, atk_spe: 45, def_spe: 80, speed: 75, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Roucool', hp: 40, atk: 45, def: 40, atk_spe: 35, def_spe: 35, speed: 56, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Roucoups', hp: 63, atk: 60, def: 55, atk_spe: 50, def_spe: 50, speed: 71, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Roucarnage', hp: 83, atk: 80, def: 75, atk_spe: 70, def_spe: 70, speed: 91, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Rattata', hp: 30, atk: 56, def: 35, atk_spe: 25, def_spe: 35, speed: 72, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Rattatac', hp: 55, atk: 81, def: 60, atk_spe: 50, def_spe: 70, speed: 97, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Piafabec', hp: 40, atk: 60, def: 30, atk_spe: 31, def_spe: 31, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Rapasdepic', hp: 65, atk: 90, def: 65, atk_spe: 61, def_spe: 61, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Abo', hp: 35, atk: 60, def: 44, atk_spe: 40, def_spe: 54, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Arbok', hp: 60, atk: 85, def: 69, atk_spe: 65, def_spe: 79, speed: 80, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Pikachu', hp: 35, atk: 55, def: 30, atk_spe: 50, def_spe: 40, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Raichu', hp: 60, atk: 90, def: 55, atk_spe: 90, def_spe: 80, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Sabelette', hp: 50, atk: 75, def: 85, atk_spe: 20, def_spe: 30, speed: 40, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Sablaireau', hp: 75, atk: 100, def: 110, atk_spe: 45, def_spe: 55, speed: 65, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nidoran F', hp: 55, atk: 47, def: 52, atk_spe: 40, def_spe: 40, speed: 41, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nidorina', hp: 70, atk: 62, def: 67, atk_spe: 55, def_spe: 55, speed: 56, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nidoqueen', hp: 90, atk: 82, def: 87, atk_spe: 75, def_spe: 85, speed: 76, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nidoran M', hp: 46, atk: 57, def: 40, atk_spe: 40, def_spe: 40, speed: 50, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nidorino', hp: 61, atk: 72, def: 57, atk_spe: 55, def_spe: 55, speed: 65, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nidoking', hp: 81, atk: 92, def: 77, atk_spe: 85, def_spe: 75, speed: 85, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Mélofée', hp: 70, atk: 45, def: 48, atk_spe: 60, def_spe: 65, speed: 35, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Mélodelfe', hp: 95, atk: 70, def: 73, atk_spe: 85, def_spe: 90, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Goupix', hp: 38, atk: 41, def: 40, atk_spe: 50, def_spe: 65, speed: 65, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Feunard', hp: 73, atk: 76, def: 75, atk_spe: 81, def_spe: 100, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Rondoudou', hp: 115, atk: 45, def: 20, atk_spe: 45, def_spe: 25, speed: 20, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Grodoudou', hp: 140, atk: 70, def: 45, atk_spe: 75, def_spe: 50, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nosferapti', hp: 40, atk: 45, def: 35, atk_spe: 30, def_spe: 40, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Nosferalto', hp: 75, atk: 80, def: 70, atk_spe: 65, def_spe: 75, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Mystherbe', hp: 45, atk: 50, def: 55, atk_spe: 75, def_spe: 65, speed: 30, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ortide', hp: 60, atk: 65, def: 70, atk_spe: 85, def_spe: 75, speed: 40, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Rafflesia', hp: 75, atk: 80, def: 85, atk_spe: 100, def_spe: 90, speed: 50, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Paras', hp: 35, atk: 70, def: 55, atk_spe: 45, def_spe: 55, speed: 25, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Parasect', hp: 60, atk: 95, def: 80, atk_spe: 60, def_spe: 80, speed: 30, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Mimitoss', hp: 60, atk: 55, def: 50, atk_spe: 40, def_spe: 55, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Aéromite', hp: 70, atk: 65, def: 60, atk_spe: 90, def_spe: 75, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Taupiqueur', hp: 10, atk: 55, def: 25, atk_spe: 35, def_spe: 45, speed: 95, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Triopikeur', hp: 35, atk: 80, def: 50, atk_spe: 50, def_spe: 70, speed: 120, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Miaouss', hp: 40, atk: 45, def: 35, atk_spe: 40, def_spe: 40, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Persian', hp: 65, atk: 70, def: 60, atk_spe: 65, def_spe: 65, speed: 115, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Psykokwak', hp: 50, atk: 52, def: 48, atk_spe: 65, def_spe: 50, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Akwakwak', hp: 80, atk: 82, def: 78, atk_spe: 95, def_spe: 80, speed: 85, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Férosinge', hp: 40, atk: 80, def: 35, atk_spe: 35, def_spe: 45, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Colossinge', hp: 65, atk: 105, def: 60, atk_spe: 60, def_spe: 70, speed: 95, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Caninos', hp: 55, atk: 70, def: 45, atk_spe: 70, def_spe: 50, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Arcanin', hp: 90, atk: 110, def: 80, atk_spe: 100, def_spe: 80, speed: 95, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ptitard', hp: 40, atk: 50, def: 40, atk_spe: 40, def_spe: 40, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Têtarte', hp: 65, atk: 65, def: 65, atk_spe: 50, def_spe: 50, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Tartard', hp: 90, atk: 85, def: 95, atk_spe: 70, def_spe: 90, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Abra', hp: 25, atk: 20, def: 15, atk_spe: 105, def_spe: 55, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Kadabra', hp: 40, atk: 35, def: 30, atk_spe: 120, def_spe: 70, speed: 105, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Alakazam', hp: 55, atk: 50, def: 45, atk_spe: 135, def_spe: 85, speed: 120, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Machoc', hp: 70, atk: 80, def: 50, atk_spe: 35, def_spe: 35, speed: 35, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Machopeur', hp: 80, atk: 100, def: 70, atk_spe: 50, def_spe: 60, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Mackogneur', hp: 90, atk: 130, def: 80, atk_spe: 65, def_spe: 85, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Chétiflor', hp: 50, atk: 75, def: 35, atk_spe: 70, def_spe: 30, speed: 40, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Boustiflor', hp: 65, atk: 90, def: 50, atk_spe: 85, def_spe: 45, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Empiflor', hp: 80, atk: 105, def: 65, atk_spe: 100, def_spe: 60, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Tentacool', hp: 40, atk: 40, def: 35, atk_spe: 50, def_spe: 100, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Tentacruel', hp: 80, atk: 70, def: 65, atk_spe: 80, def_spe: 120, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Racaillou', hp: 40, atk: 80, def: 100, atk_spe: 30, def_spe: 30, speed: 20, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Gravalanch', hp: 55, atk: 95, def: 115, atk_spe: 45, def_spe: 45, speed: 35, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Grolem', hp: 80, atk: 110, def: 130, atk_spe: 55, def_spe: 65, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ponyta', hp: 50, atk: 85, def: 55, atk_spe: 65, def_spe: 65, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Galopa', hp: 65, atk: 100, def: 70, atk_spe: 80, def_spe: 80, speed: 105, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ramoloss', hp: 90, atk: 65, def: 65, atk_spe: 40, def_spe: 40, speed: 15, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Flagadoss', hp: 95, atk: 75, def: 110, atk_spe: 100, def_spe: 80, speed: 30, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Magnéti', hp: 25, atk: 35, def: 70, atk_spe: 95, def_spe: 55, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Magnéton', hp: 50, atk: 60, def: 95, atk_spe: 120, def_spe: 70, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Canarticho', hp: 52, atk: 65, def: 55, atk_spe: 58, def_spe: 62, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Doduo', hp: 35, atk: 85, def: 45, atk_spe: 35, def_spe: 35, speed: 75, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Dodrio', hp: 60, atk: 110, def: 70, atk_spe: 60, def_spe: 60, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Otaria', hp: 65, atk: 45, def: 55, atk_spe: 45, def_spe: 70, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Lamantine', hp: 90, atk: 70, def: 80, atk_spe: 70, def_spe: 95, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Tadmorv', hp: 80, atk: 80, def: 50, atk_spe: 40, def_spe: 50, speed: 25, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Grotadmorv', hp: 105, atk: 105, def: 75, atk_spe: 65, def_spe: 100, speed: 50, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Kokiyas', hp: 30, atk: 65, def: 100, atk_spe: 45, def_spe: 25, speed: 40, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Crustabri', hp: 50, atk: 95, def: 180, atk_spe: 85, def_spe: 45, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Fantominus', hp: 30, atk: 35, def: 30, atk_spe: 100, def_spe: 35, speed: 80, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Spectrum', hp: 45, atk: 50, def: 45, atk_spe: 115, def_spe: 55, speed: 95, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ectoplasma', hp: 60, atk: 65, def: 60, atk_spe: 130, def_spe: 75, speed: 110, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Onix', hp: 35, atk: 45, def: 160, atk_spe: 30, def_spe: 45, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Soporifik', hp: 60, atk: 48, def: 45, atk_spe: 43, def_spe: 90, speed: 42, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Hypnomade', hp: 85, atk: 73, def: 70, atk_spe: 73, def_spe: 115, speed: 67, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Krabby', hp: 30, atk: 105, def: 90, atk_spe: 25, def_spe: 25, speed: 50, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Krabboss', hp: 55, atk: 130, def: 115, atk_spe: 50, def_spe: 50, speed: 75, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Voltorbe', hp: 40, atk: 30, def: 50, atk_spe: 55, def_spe: 55, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Électrode', hp: 60, atk: 50, def: 70, atk_spe: 80, def_spe: 80, speed: 140, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Noeunoeuf', hp: 60, atk: 40, def: 80, atk_spe: 60, def_spe: 45, speed: 40, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Noadkoko', hp: 95, atk: 95, def: 85, atk_spe: 125, def_spe: 65, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Osselait', hp: 50, atk: 50, def: 95, atk_spe: 40, def_spe: 50, speed: 35, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ossatueur', hp: 60, atk: 80, def: 110, atk_spe: 50, def_spe: 80, speed: 45, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Kicklee', hp: 50, atk: 120, def: 53, atk_spe: 35, def_spe: 110, speed: 87, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Tygnon', hp: 50, atk: 105, def: 79, atk_spe: 35, def_spe: 110, speed: 76, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Excelangue', hp: 90, atk: 55, def: 75, atk_spe: 60, def_spe: 75, speed: 30, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Smogo', hp: 40, atk: 65, def: 95, atk_spe: 60, def_spe: 45, speed: 35, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Smogogo', hp: 65, atk: 90, def: 120, atk_spe: 85, def_spe: 70, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Rhinocorne', hp: 80, atk: 85, def: 95, atk_spe: 30, def_spe: 30, speed: 25, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Rhinoféros', hp: 105, atk: 130, def: 120, atk_spe: 45, def_spe: 45, speed: 40, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Leveinard', hp: 250, atk: 5, def: 5, atk_spe: 35, def_spe: 105, speed: 50, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Saquedeneu', hp: 65, atk: 55, def: 115, atk_spe: 100, def_spe: 40, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Kangourex', hp: 105, atk: 95, def: 80, atk_spe: 40, def_spe: 80, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Hypotrempe', hp: 30, atk: 40, def: 70, atk_spe: 70, def_spe: 25, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Hypocéan', hp: 55, atk: 65, def: 95, atk_spe: 95, def_spe: 45, speed: 85, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Poissirène', hp: 45, atk: 67, def: 60, atk_spe: 35, def_spe: 50, speed: 63, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Poissoroy', hp: 80, atk: 92, def: 65, atk_spe: 65, def_spe: 80, speed: 68, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Stari', hp: 30, atk: 45, def: 55, atk_spe: 70, def_spe: 55, speed: 85, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Staross', hp: 60, atk: 75, def: 85, atk_spe: 100, def_spe: 85, speed: 115, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'M. Mime', hp: 40, atk: 45, def: 65, atk_spe: 100, def_spe: 120, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Insécateur', hp: 70, atk: 110, def: 80, atk_spe: 55, def_spe: 80, speed: 105, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Lippoutou', hp: 65, atk: 50, def: 35, atk_spe: 115, def_spe: 95, speed: 95, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Élektek', hp: 65, atk: 83, def: 57, atk_spe: 95, def_spe: 85, speed: 105, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Magmar', hp: 65, atk: 95, def: 57, atk_spe: 100, def_spe: 85, speed: 93, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Scarabrute', hp: 65, atk: 125, def: 100, atk_spe: 55, def_spe: 70, speed: 85, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Tauros', hp: 75, atk: 100, def: 95, atk_spe: 40, def_spe: 70, speed: 110, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Magicarpe', hp: 20, atk: 10, def: 55, atk_spe: 15, def_spe: 20, speed: 80, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Léviator', hp: 95, atk: 125, def: 79, atk_spe: 60, def_spe: 100, speed: 81, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Lokhlass', hp: 130, atk: 85, def: 80, atk_spe: 85, def_spe: 95, speed: 60, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Métamorph', hp: 48, atk: 48, def: 48, atk_spe: 48, def_spe: 48, speed: 48, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Évoli', hp: 55, atk: 55, def: 50, atk_spe: 45, def_spe: 65, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Aquali', hp: 130, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 65, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Voltali', hp: 65, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 130, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Pyroli', hp: 65, atk: 130, def: 60, atk_spe: 95, def_spe: 110, speed: 65, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Porygon', hp: 65, atk: 60, def: 70, atk_spe: 85, def_spe: 75, speed: 40, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Amonita', hp: 35, atk: 40, def: 100, atk_spe: 90, def_spe: 55, speed: 35, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Amonistar', hp: 70, atk: 60, def: 125, atk_spe: 115, def_spe: 70, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Kabuto', hp: 30, atk: 80, def: 90, atk_spe: 55, def_spe: 45, speed: 55, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Kabutops', hp: 60, atk: 115, def: 105, atk_spe: 65, def_spe: 70, speed: 80, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ptéra', hp: 80, atk: 105, def: 65, atk_spe: 60, def_spe: 75, speed: 130, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Ronflex', hp: 160, atk: 110, def: 65, atk_spe: 65, def_spe: 110, speed: 30, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Artikodin', hp: 90, atk: 85, def: 100, atk_spe: 95, def_spe: 125, speed: 85, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Électhor', hp: 90, atk: 90, def: 85, atk_spe: 125, def_spe: 90, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Sulfura', hp: 90, atk: 100, def: 90, atk_spe: 125, def_spe: 85, speed: 90, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Minidraco', hp: 41, atk: 64, def: 45, atk_spe: 50, def_spe: 50, speed: 50, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Draco', hp: 61, atk: 84, def: 65, atk_spe: 70, def_spe: 70, speed: 70, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Dracolosse', hp: 91, atk: 134, def: 95, atk_spe: 100, def_spe: 100, speed: 80, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Mewtwo', hp: 106, atk: 110, def: 90, atk_spe: 154, def_spe: 90, speed: 130, nmbr_of_votes: Math.floor(Math.random() * 101) },
  { name: 'Mew', hp: 100, atk: 100, def: 100, atk_spe: 100, def_spe: 100, speed: 100, nmbr_of_votes: Math.floor(Math.random() * 101) }
]);

// Création des Teams avec leurs Pokémon associés
await Team.bulkCreate([
  { name: 'Ultimate Team', description: 'La meilleure team du monde' },
  { name: "La Team de l'enfer", description: 'Le feuuuuu' },
  { name: 'Squad fofolle', description: 'Pour tout gagner' }
]);

// Association des Pokémon aux Teams via la table team_pokemon
const ultimateTeam = await Team.findOne({ where: { name: 'Ultimate Team' } });
await ultimateTeam.setPokemons([
  (await Pokemon.findOne({ where: { name: 'Florizarre' } })).id,
  (await Pokemon.findOne({ where: { name: 'Dracaufeu' } })).id,
  (await Pokemon.findOne({ where: { name: 'Tortank' } })).id,
  (await Pokemon.findOne({ where: { name: 'Papilusion' } })).id,
  (await Pokemon.findOne({ where: { name: 'Dardargnan' } })).id,
  (await Pokemon.findOne({ where: { name: 'Nidoking' } })).id
]);

const fireTeam = await Team.findOne({ where: { name: "La Team de l'enfer" } });
await fireTeam.setPokemons([
  (await Pokemon.findOne({ where: { name: 'Dracaufeu' } })).id,
  (await Pokemon.findOne({ where: { name: 'Feunard' } })).id,
  (await Pokemon.findOne({ where: { name: 'Arcanin' } })).id,
  (await Pokemon.findOne({ where: { name: 'Magmar' } })).id,
  (await Pokemon.findOne({ where: { name: 'Pyroli' } })).id,
  (await Pokemon.findOne({ where: { name: 'Sulfura' } })).id
]);

const crazySquad = await Team.findOne({ where: { name: 'Squad fofolle' } });
await crazySquad.setPokemons([
  (await Pokemon.findOne({ where: { name: 'Mew' } })).id,
  (await Pokemon.findOne({ where: { name: 'Mewtwo' } })).id,
  (await Pokemon.findOne({ where: { name: 'Dracolosse' } })).id,
  (await Pokemon.findOne({ where: { name: 'Sulfura' } })).id,
  (await Pokemon.findOne({ where: { name: 'Électhor' } })).id,
  (await Pokemon.findOne({ where: { name: 'Artikodin' } })).id
]);

// Fonction pour ajouter un type à un Pokémon
async function addTypeToPokemon(pokemonName, typeEntity) {
  const pokemon = await Pokemon.findOne({ where: { name: pokemonName } });
  await pokemon.addType(typeEntity);
}

// Ajout des types aux Pokémon
await addTypeToPokemon('Bulbizarre', grassType);
await addTypeToPokemon('Bulbizarre', poisonType);
await addTypeToPokemon('Herbizarre', grassType);
await addTypeToPokemon('Herbizarre', poisonType);
await addTypeToPokemon('Florizarre', grassType);
await addTypeToPokemon('Florizarre', poisonType);
await addTypeToPokemon('Salamèche', fireType);
await addTypeToPokemon('Reptincel', fireType);
await addTypeToPokemon('Dracaufeu', fireType);
await addTypeToPokemon('Dracaufeu', flyingType);
await addTypeToPokemon('Carapuce', waterType);
await addTypeToPokemon('Carabaffe', waterType);
await addTypeToPokemon('Tortank', waterType);
await addTypeToPokemon('Chenipan', bugType);
await addTypeToPokemon('Chrysacier', bugType);
await addTypeToPokemon('Papilusion', bugType);
await addTypeToPokemon('Papilusion', flyingType);
await addTypeToPokemon('Aspicot', bugType);
await addTypeToPokemon('Aspicot', poisonType);
await addTypeToPokemon('Coconfort', bugType);
await addTypeToPokemon('Coconfort', poisonType);
await addTypeToPokemon('Dardargnan', bugType);
await addTypeToPokemon('Dardargnan', poisonType);
await addTypeToPokemon('Roucool', normalType);
await addTypeToPokemon('Roucool', flyingType);
await addTypeToPokemon('Roucoups', normalType);
await addTypeToPokemon('Roucoups', flyingType);
await addTypeToPokemon('Roucarnage', normalType);
await addTypeToPokemon('Roucarnage', flyingType);
await addTypeToPokemon('Rattata', normalType);
await addTypeToPokemon('Rattatac', normalType);
await addTypeToPokemon('Piafabec', normalType);
await addTypeToPokemon('Piafabec', flyingType);
await addTypeToPokemon('Rapasdepic', normalType);
await addTypeToPokemon('Rapasdepic', flyingType);
await addTypeToPokemon('Abo', poisonType);
await addTypeToPokemon('Arbok', poisonType);
await addTypeToPokemon('Pikachu', electricType);
await addTypeToPokemon('Raichu', electricType);
await addTypeToPokemon('Sabelette', groundType);
await addTypeToPokemon('Sablaireau', groundType);
await addTypeToPokemon('Nidoran F', poisonType);
await addTypeToPokemon('Nidorina', poisonType);
await addTypeToPokemon('Nidoqueen', poisonType);
await addTypeToPokemon('Nidoqueen', groundType);
await addTypeToPokemon('Nidoran M', poisonType);
await addTypeToPokemon('Nidorino', poisonType);
await addTypeToPokemon('Nidoking', poisonType);
await addTypeToPokemon('Nidoking', groundType);
await addTypeToPokemon('Mélofée', normalType);
await addTypeToPokemon('Mélodelfe', normalType);
await addTypeToPokemon('Goupix', fireType);
await addTypeToPokemon('Feunard', fireType);
await addTypeToPokemon('Rondoudou', normalType);
await addTypeToPokemon('Grodoudou', normalType);
await addTypeToPokemon('Nosferapti', poisonType);
await addTypeToPokemon('Nosferapti', flyingType);
await addTypeToPokemon('Nosferalto', poisonType);
await addTypeToPokemon('Nosferalto', flyingType);
await addTypeToPokemon('Mystherbe', grassType);
await addTypeToPokemon('Mystherbe', poisonType);
await addTypeToPokemon('Ortide', grassType);
await addTypeToPokemon('Ortide', poisonType);
await addTypeToPokemon('Rafflesia', grassType);
await addTypeToPokemon('Rafflesia', poisonType);
await addTypeToPokemon('Paras', bugType);
await addTypeToPokemon('Paras', grassType);
await addTypeToPokemon('Parasect', bugType);
await addTypeToPokemon('Parasect', grassType);
await addTypeToPokemon('Mimitoss', bugType);
await addTypeToPokemon('Mimitoss', poisonType);
await addTypeToPokemon('Aéromite', bugType);
await addTypeToPokemon('Aéromite', poisonType);
await addTypeToPokemon('Taupiqueur', groundType);
await addTypeToPokemon('Triopikeur', groundType);
await addTypeToPokemon('Miaouss', normalType);
await addTypeToPokemon('Persian', normalType);
await addTypeToPokemon('Psykokwak', waterType);
await addTypeToPokemon('Akwakwak', waterType);
await addTypeToPokemon('Férosinge', fightingType);
await addTypeToPokemon('Colossinge', fightingType);
await addTypeToPokemon('Caninos', fireType);
await addTypeToPokemon('Arcanin', fireType);
await addTypeToPokemon('Ptitard', waterType);
await addTypeToPokemon('Têtarte', waterType);
await addTypeToPokemon('Tartard', waterType);
await addTypeToPokemon('Tartard', fightingType);
await addTypeToPokemon('Abra', psychicType);
await addTypeToPokemon('Kadabra', psychicType);
await addTypeToPokemon('Alakazam', psychicType);
await addTypeToPokemon('Machoc', fightingType);
await addTypeToPokemon('Machopeur', fightingType);
await addTypeToPokemon('Mackogneur', fightingType);
await addTypeToPokemon('Chétiflor', grassType);
await addTypeToPokemon('Chétiflor', poisonType);
await addTypeToPokemon('Boustiflor', grassType);
await addTypeToPokemon('Boustiflor', poisonType);
await addTypeToPokemon('Empiflor', grassType);
await addTypeToPokemon('Empiflor', poisonType);
await addTypeToPokemon('Tentacool', waterType);
await addTypeToPokemon('Tentacool', poisonType);
await addTypeToPokemon('Tentacruel', waterType);
await addTypeToPokemon('Tentacruel', poisonType);
await addTypeToPokemon('Racaillou', rockType);
await addTypeToPokemon('Racaillou', groundType);
await addTypeToPokemon('Gravalanch', rockType);
await addTypeToPokemon('Gravalanch', groundType);
await addTypeToPokemon('Grolem', rockType);
await addTypeToPokemon('Grolem', groundType);
await addTypeToPokemon('Ponyta', fireType);
await addTypeToPokemon('Galopa', fireType);
await addTypeToPokemon('Ramoloss', waterType);
await addTypeToPokemon('Ramoloss', psychicType);
await addTypeToPokemon('Flagadoss', waterType);
await addTypeToPokemon('Flagadoss', psychicType);
await addTypeToPokemon('Magnéti', electricType);
await addTypeToPokemon('Magnéti', steelType);
await addTypeToPokemon('Magnéton', electricType);
await addTypeToPokemon('Magnéton', steelType);
await addTypeToPokemon('Canarticho', normalType);
await addTypeToPokemon('Canarticho', flyingType);
await addTypeToPokemon('Doduo', normalType);
await addTypeToPokemon('Doduo', flyingType);
await addTypeToPokemon('Dodrio', normalType);
await addTypeToPokemon('Dodrio', flyingType);
await addTypeToPokemon('Otaria', waterType);
await addTypeToPokemon('Lamantine', waterType);
await addTypeToPokemon('Lamantine', iceType);
await addTypeToPokemon('Tadmorv', poisonType);
await addTypeToPokemon('Grotadmorv', poisonType);
await addTypeToPokemon('Kokiyas', waterType);
await addTypeToPokemon('Crustabri', waterType);
await addTypeToPokemon('Crustabri', iceType);
await addTypeToPokemon('Fantominus', ghostType);
await addTypeToPokemon('Fantominus', poisonType);
await addTypeToPokemon('Spectrum', ghostType);
await addTypeToPokemon('Spectrum', poisonType);
await addTypeToPokemon('Ectoplasma', ghostType);
await addTypeToPokemon('Ectoplasma', poisonType);
await addTypeToPokemon('Onix', rockType);
await addTypeToPokemon('Onix', groundType);
await addTypeToPokemon('Soporifik', psychicType);
await addTypeToPokemon('Hypnomade', psychicType);
await addTypeToPokemon('Krabby', waterType);
await addTypeToPokemon('Krabboss', waterType);
await addTypeToPokemon('Voltorbe', electricType);
await addTypeToPokemon('Électrode', electricType);
await addTypeToPokemon('Noeunoeuf', grassType);
await addTypeToPokemon('Noeunoeuf', psychicType);
await addTypeToPokemon('Noadkoko', grassType);
await addTypeToPokemon('Noadkoko', psychicType);
await addTypeToPokemon('Osselait', groundType);
await addTypeToPokemon('Ossatueur', groundType);
await addTypeToPokemon('Kicklee', fightingType);
await addTypeToPokemon('Tygnon', fightingType);
await addTypeToPokemon('Excelangue', normalType);
await addTypeToPokemon('Smogo', poisonType);
await addTypeToPokemon('Smogogo', poisonType);
await addTypeToPokemon('Rhinocorne', groundType);
await addTypeToPokemon('Rhinocorne', rockType);
await addTypeToPokemon('Rhinoféros', groundType);
await addTypeToPokemon('Rhinoféros', rockType);
await addTypeToPokemon('Leveinard', normalType);
await addTypeToPokemon('Saquedeneu', grassType);
await addTypeToPokemon('Kangourex', normalType);
await addTypeToPokemon('Hypotrempe', waterType);
await addTypeToPokemon('Hypocéan', waterType);
await addTypeToPokemon('Poissirène', waterType);
await addTypeToPokemon('Poissoroy', waterType);
await addTypeToPokemon('Stari', waterType);
await addTypeToPokemon('Staross', waterType);
await addTypeToPokemon('Staross', psychicType);
await addTypeToPokemon('M. Mime', psychicType);
await addTypeToPokemon('Insécateur', bugType);
await addTypeToPokemon('Insécateur', flyingType);
await addTypeToPokemon('Lippoutou', iceType);
await addTypeToPokemon('Lippoutou', psychicType);
await addTypeToPokemon('Élektek', electricType);
await addTypeToPokemon('Magmar', fireType);
await addTypeToPokemon('Scarabrute', bugType);
await addTypeToPokemon('Tauros', normalType);
await addTypeToPokemon('Magicarpe', waterType);
await addTypeToPokemon('Léviator', waterType);
await addTypeToPokemon('Léviator', flyingType);
await addTypeToPokemon('Lokhlass', waterType);
await addTypeToPokemon('Lokhlass', iceType);
await addTypeToPokemon('Métamorph', normalType);
await addTypeToPokemon('Évoli', normalType);
await addTypeToPokemon('Aquali', waterType);
await addTypeToPokemon('Voltali', electricType);
await addTypeToPokemon('Pyroli', fireType);
await addTypeToPokemon('Porygon', normalType);
await addTypeToPokemon('Amonita', rockType);
await addTypeToPokemon('Amonita', waterType);
await addTypeToPokemon('Amonistar', rockType);
await addTypeToPokemon('Amonistar', waterType);
await addTypeToPokemon('Kabuto', rockType);
await addTypeToPokemon('Kabuto', waterType);
await addTypeToPokemon('Kabutops', rockType);
await addTypeToPokemon('Kabutops', waterType);
await addTypeToPokemon('Ptéra', rockType);
await addTypeToPokemon('Ptéra', flyingType);
await addTypeToPokemon('Ronflex', normalType);
await addTypeToPokemon('Artikodin', iceType);
await addTypeToPokemon('Artikodin', flyingType);
await addTypeToPokemon('Électhor', electricType);
await addTypeToPokemon('Électhor', flyingType);
await addTypeToPokemon('Sulfura', fireType);
await addTypeToPokemon('Sulfura', flyingType);
await addTypeToPokemon('Minidraco', dragonType);
await addTypeToPokemon('Draco', dragonType);
await addTypeToPokemon('Dracolosse', dragonType);
await addTypeToPokemon('Dracolosse', flyingType);
await addTypeToPokemon('Mewtwo', psychicType);
await addTypeToPokemon('Mew', psychicType);

console.log("✅ Pokémon seed done with success !");

console.log("🧹 Clean up by closing database connection");
await sequelize.close();