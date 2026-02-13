import { Microbe } from '../types/microbe';

export const mockMicrobes: Microbe[] = [
{
  id: '1',
  name: 'Cutibacterium acnes',
  type: 'bacteria',
  abundance: 32,
  role: 'beneficial',
  description:
  'Most common skin bacterium, helps maintain acidic pH and prevents pathogen colonization.'
},
{
  id: '2',
  name: 'Staphylococcus epidermidis',
  type: 'bacteria',
  abundance: 24,
  role: 'beneficial',
  description:
  'Key commensal bacterium that produces antimicrobial peptides protecting against pathogens.'
},
{
  id: '3',
  name: 'Malassezia globosa',
  type: 'fungi',
  abundance: 18,
  role: 'neutral',
  description:
  'Lipid-dependent yeast found on sebaceous skin areas. Part of normal skin flora.'
},
{
  id: '4',
  name: 'Candida albicans',
  type: 'fungi',
  abundance: 6,
  role: 'pathogenic',
  description:
  'Opportunistic yeast that can cause infections when skin barrier is compromised.'
},
{
  id: '5',
  name: 'Staphylococcus aureus',
  type: 'bacteria',
  abundance: 8,
  role: 'pathogenic',
  description:
  'Can cause skin infections and is associated with atopic dermatitis flares.'
},
{
  id: '6',
  name: 'Malassezia restricta',
  type: 'fungi',
  abundance: 12,
  role: 'neutral',
  description:
  'Common scalp fungus associated with dandruff when overabundant.'
},
{
  id: '7',
  name: 'Corynebacterium minutissimum',
  type: 'bacteria',
  abundance: 5,
  role: 'beneficial',
  description:
  'Produces antimicrobial compounds and contributes to skin barrier defense.'
},
{
  id: '8',
  name: 'Trichophyton rubrum',
  type: 'fungi',
  abundance: 2,
  role: 'pathogenic',
  description:
  "Dermatophyte responsible for athlete's foot and nail fungal infections."
},
{
  id: '9',
  name: 'Micrococcus luteus',
  type: 'bacteria',
  abundance: 4,
  role: 'neutral',
  description:
  'Ubiquitous environmental bacterium commonly found on human skin.'
},
{
  id: '10',
  name: 'Propionibacterium granulosum',
  type: 'bacteria',
  abundance: 3,
  role: 'beneficial',
  description:
  'Anaerobic bacterium that helps maintain healthy skin microbiome balance.'
}];