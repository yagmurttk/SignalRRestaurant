using SignalR.EntityLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.DataAccessLayer.Abstract
{
    public interface IProductDal : IGenericDal<Product>
    {
        List<Product> GetProductsWithCategories();
        int ProductCount();
        int ProductCountByCategoryNameHamburger();
        int ProductCountByCategoryNameDrink(); // İçecek kategorisindeki ürün sayısını döner
        decimal ProductPriceAvg(); // Ürünlerin ortalama fiyatını döner
        string ProductNameByMaxPrice(); // En yüksek fiyatlı ürünün adını döner
        string ProductNameByMinPrice(); // En düşük fiyatlı ürünün adını döner
        decimal ProductAvgPriceByHamburger(); // Hamburger kategorisindeki ürünlerin ortalama fiyatını döner
        decimal ProductPriceBySteakBurger();
        decimal TotalPriceByDrinkCategory();
        decimal TotalPriceBySaladCategory();
        List<Product> GetLast9Products();
    }
}
