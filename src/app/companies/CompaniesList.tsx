'use client'
import { useState } from 'react';
import Map from './Map';
import CompanyList from './CategoryFilter';


const initialCompanies = [
    { id: 1, name: 'AzTech Solutions', address: 'Nizami 12', latitude: 40.4093, longitude: 49.8671, phone: '+994 50 123 45 67', description: 'İT həllər, veb inkişaf, proqram təminatı' },
    { id: 2, name: 'SmartHome Baku', address: 'Heydər Əliyev pr. 25', latitude: 40.4180, longitude: 49.8789, phone: '+994 55 987 65 43', description: 'Ağıllı ev sistemləri, təhlükəsizlik sistemləri' },
    { id: 3, name: 'Baku IT Services', address: 'Füzuli 45', latitude: 40.4097, longitude: 49.8546, phone: '+994 12 456 78 90', description: 'İT texniki dəstək və xidmətlər' },
    { id: 4, name: 'Texnika Ustası', address: 'Rəşid Behbudov 10', latitude: 40.3981, longitude: 49.8674, phone: '+994 50 321 45 67', description: 'Məişət texnikasının təmiri və quraşdırılması' },
    { id: 5, name: 'FutureTech', address: 'Əhmədli, Babək pr. 120', latitude: 40.3777, longitude: 49.9300, phone: '+994 55 123 45 67', description: 'Gələcək texnologiyalar və İT həllər' },
    { id: 6, name: 'HomeSmart Systems', address: 'Nəriman Nərimanov pr. 35', latitude: 40.4095, longitude: 49.8560, phone: '+994 70 456 78 90', description: 'Ağıllı ev texnologiyaları və enerji idarəetməsi' },
    { id: 7, name: 'Baku Security', address: '28 May 15', latitude: 40.3725, longitude: 49.8417, phone: '+994 51 789 45 67', description: 'Təhlükəsizlik və nəzarət sistemləri' },
    { id: 8, name: 'IT Support Plus', address: 'Azadlıq 99', latitude: 40.4020, longitude: 49.8530, phone: '+994 50 987 65 43', description: 'Texniki dəstək və şəbəkə həlləri' },
    { id: 9, name: 'SmartLife Azerbaijan', address: 'Badamdar 21', latitude: 40.3702, longitude: 49.8221, phone: '+994 70 321 45 67', description: 'Evlərdə ağıllı həllər və cihazlar' },
    { id: 10, name: 'Rəqəmsal İnkişaf', address: 'Binəqədi, Atatürk pr. 101', latitude: 40.4343, longitude: 49.8520, phone: '+994 12 456 12 34', description: 'İT inkişaf və rəqəmsal transformasiya' },
    { id: 11, name: 'Servis Master', address: 'Qara Qarayev 67', latitude: 40.3920, longitude: 49.9354, phone: '+994 55 654 32 10', description: 'Bütün növ məişət texnikasının təmiri' },
    { id: 12, name: 'Baku Network Systems', address: 'İçərişəhər, Qala döngəsi 2', latitude: 40.3660, longitude: 49.8346, phone: '+994 70 876 54 32', description: 'Şəbəkə həlləri və texniki xidmətlər' },
    { id: 13, name: 'Əsas IT Həllər', address: 'Ziya Bünyadov pr. 28', latitude: 40.4023, longitude: 49.8891, phone: '+994 51 321 76 54', description: 'Veb inkişaf və sistem inteqrasiyası' },
    { id: 14, name: 'Elektron Evlər', address: 'Nizami Rayonu, Keşlə 9', latitude: 40.4040, longitude: 49.9327, phone: '+994 12 876 54 32', description: 'Ağıllı ev sistemləri və avtomatlaşdırma' },
    { id: 15, name: 'IT Power Solutions', address: 'Masazır, Məmməd Araz 54', latitude: 40.5182, longitude: 49.7946, phone: '+994 50 765 43 21', description: 'İT enerji idarəetmə və bulud həlləri' },
    { id: 16, name: 'Məişət Texniki Servisi', address: 'Sumqayıt şossesi 101', latitude: 40.4510, longitude: 49.7434, phone: '+994 12 543 21 09', description: 'Məişət texnikasının quraşdırılması və təmiri' },
    { id: 17, name: 'Digital Home', address: 'Şüvəlan, Sahil küç. 12', latitude: 40.5301, longitude: 50.0060, phone: '+994 70 432 10 98', description: 'Ağıllı evlər və ev avtomatlaşdırması' },
    { id: 18, name: 'TexnoPlus Baku', address: 'Yasamal Rayonu, Zərdabi pr. 50', latitude: 40.3851, longitude: 49.8029, phone: '+994 55 321 65 43', description: 'Texniki dəstək və təmir xidmətləri' },
    { id: 19, name: 'Ağıllı Sistemlər', address: 'Xətai pr. 87', latitude: 40.3834, longitude: 49.8832, phone: '+994 50 765 43 21', description: 'Ağıllı ev həlləri və təhlükəsizlik sistemləri' },
    { id: 20, name: 'İnformasiya Texnologiyaları', address: 'Həzi Aslanov 15', latitude: 40.3530, longitude: 49.9267, phone: '+994 12 123 45 67', description: 'İT konsaltinq və texniki dəstək' },
    { id: 21, name: 'MegaTech Solutions', address: 'Əhmədli, Sarayevo küç. 11', latitude: 40.3721, longitude: 49.9309, phone: '+994 51 234 56 78', description: 'İT xidmətlər və innovativ həllər' },
    { id: 22, name: 'TechRepair Baku', address: 'Hövsan qəs., H.Əliyev küç. 4', latitude: 40.3484, longitude: 49.9851, phone: '+994 70 654 32 21', description: 'Texnikanın təmiri və quraşdırılması' },
    { id: 23, name: 'AzData Networks', address: 'Sumqayıt, 9-cu mikrorayon 23', latitude: 40.5893, longitude: 49.6687, phone: '+994 55 321 09 87', description: 'Şəbəkə həlləri və məlumat mərkəzləri' },
    { id: 24, name: 'ProTech Services', address: 'Bakıxanov qəs. 34', latitude: 40.4153, longitude: 49.8840, phone: '+994 12 987 65 43', description: 'Texniki dəstək və texnologiya həlləri' },
    { id: 25, name: 'İnnovativ Texnologiyalar', address: 'Qarayev pr. 78', latitude: 40.3971, longitude: 49.9317, phone: '+994 51 345 67 89', description: 'Ağıllı texnologiyalar və texniki innovasiyalar' },
    { id: 26, name: 'Elektrik Solutions', address: 'Ələt qəs., Mərkəzi küç. 56', latitude: 40.1631, longitude: 49.4885, phone: '+994 55 987 65 43', description: 'Elektrik avadanlıqları və sistem quraşdırılması' },
    { id: 27, name: 'Baku TechServ', address: 'Sabunçu 9', latitude: 40.4351, longitude: 49.9025, phone: '+994 70 543 21 09', description: 'Texniki xidmət və texnologiya təmir' },
    { id: 28, name: 'Məişət Texnikası Ustası', address: 'Xırdalan, Səməd Vurğun 45', latitude: 40.4456, longitude: 49.7649, phone: '+994 12 456 23 12', description: 'Məişət texnikası və elektronik cihazların təmiri' },
    { id: 29, name: 'IT Master Solutions', address: 'Zığ yolu 50', latitude: 40.3712, longitude: 49.9840, phone: '+994 51 234 56 32', description: 'İT xidmətlər və həllər' },
    { id: 30, name: 'Təhlükəsizlik Texnologiyaları', address: 'Xətai rayonu, Nobel pr. 81', latitude: 40.3915, longitude: 49.9015, phone: '+994 55 654 32 10', description: 'Təhlükəsizlik sistemləri və monitorinq' },
    { id: 31, name: 'Smart Systems Baku', address: 'Nəriman Nərimanov 57', latitude: 40.4125, longitude: 49.8737, phone: '+994 50 987 65 43', description: 'Ağıllı ev və təhlükəsizlik həlləri' },
    { id: 32, name: 'RobotTex', address: 'Binə qəs., 2-ci döngə 5', latitude: 40.4487, longitude: 49.9994, phone: '+994 51 345 67 89', description: 'Robotik texnologiyalar və avtomatlaşdırma' },
    { id: 33, name: 'E-Texnika Servis', address: 'Neftçilər pr. 110', latitude: 40.3764, longitude: 49.8684, phone: '+994 12 543 21 09', description: 'Elektron avadanlıqların təmiri və texniki xidmət' },
    { id: 34, name: 'TechnoCity', address: 'Bakı, Yasamal rayonu, Cəfər Cabbarlı küç. 19', latitude: 40.3894, longitude: 49.8420, phone: '+994 50 432 10 76', description: 'Texnologiyalar və ağıllı cihazlar' },
    { id: 35, name: 'DataNet', address: 'Bakı, Nərimanov rayonu, Ağa Neymətulla küç. 87', latitude: 40.4019, longitude: 49.8587, phone: '+994 12 234 56 12', description: 'İT şəbəkə xidmətləri və məlumat mərkəzləri' },
    { id: 36, name: 'Ağıllı Evlər', address: 'Xəzər rayonu, Buzovna, Sahil küç. 10', latitude: 40.5587, longitude: 50.0110, phone: '+994 55 876 54 32', description: 'Ağıllı ev sistemləri və təhlükəsizlik' },
    { id: 37, name: 'Məişət Ustası Baku', address: 'Suraxanı rayonu, Hövsan, Mərkəzi küç. 21', latitude: 40.3921, longitude: 49.9617, phone: '+994 51 321 43 65', description: 'Məişət cihazlarının təmiri və xidmət' },
    { id: 38, name: 'Təmir Ustası', address: 'Bakı, Bayıl qəs., Nizami küç. 9', latitude: 40.3641, longitude: 49.8343, phone: '+994 70 543 21 90', description: 'Məişət texnikası təmiri' },
    { id: 39, name: 'Smart Technologies', address: 'Bilgəh, Mərkəzi küç. 30', latitude: 40.5981, longitude: 49.9604, phone: '+994 50 876 45 32', description: 'Ağıllı ev və innovativ texnologiyalar' },
    { id: 40, name: 'İT Texnika Servis', address: 'Əmircan, Qara Qarayev 55', latitude: 40.4340, longitude: 49.9450, phone: '+994 12 876 54 23', description: 'İT texnologiyaları və texniki xidmət' }
  ];
  
const CompaniesPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className='flex flex-wrap'>
        <div className="w-full">
            <h2 className='text-4xl text-center uppercase py-9'>Sizə yaxın olan topdançilar seçin</h2>
        </div>
        <div className="w-4/12">
                <CompanyList
                companies={initialCompanies}
                onSelectCompany={(company) => setSelectedCompany({ lat: company.latitude, lng: company.longitude })}
            />
        </div>
        <div className="w-8/12">
        <Map
        companies={initialCompanies}
        center={selectedCompany}
      />
        </div>
      
      
    </div>
  );
};

export default CompaniesPage;
