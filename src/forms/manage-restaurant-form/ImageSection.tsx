import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
    const { control, watch } = useFormContext();

    const existingImageUrl = watch("imageUrl");

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Imagem da pizzaria</h2>
                <FormDescription>
                    Adicione a imagem ou logo do seu restaurante que irá aparecer ao buscarem. Adicionar uma nova imagem já possuindo, irá sobrepor a antiga imagem.
                </FormDescription>
            </div>
            
            <div className="flex flex-col gap-8 md:w-[35%]">
              {existingImageUrl && (
                <AspectRatio ratio={16/9}>
                  <img 
                   src={existingImageUrl}
                   className="rounded-xl object-cover h-full w-full"
                  />
                </AspectRatio>
              )}
                <FormField 
                  control={control} 
                  name="imageFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          className="bg-white rounded-xl border-SecondaryGrey" 
                          type="file" 
                          accept=".jpg, .jpeg, .png"
                          onChange={(event) => 
                            field.onChange(
                                event.target.files ? event.target.files[0] : null 
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />    
                    </FormItem>
                  )}
                />
            </div>
        </div>
    )
}

export default ImageSection;